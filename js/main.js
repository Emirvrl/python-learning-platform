document.addEventListener('DOMContentLoaded', () => {
    const topicsList = document.querySelector('.topics-list');
    const learningArea = document.querySelector('.learning-area');
    const topicTitle = document.querySelector('#topic-title');
    const topicDescription = document.querySelector('#topic-description');
    const currentQuestion = document.querySelector('#current-question');
    const codeOutput = document.querySelector('#code-output');
    const runCodeBtn = document.querySelector('#run-code');
    
    let currentTopic = null;
    let currentSubTopic = null;
    let currentExampleIndex = 0;
    let userPoints = 0;
    let completedExercises = JSON.parse(localStorage.getItem('completedExercises') || '{}');

    // CodeMirror editörünü oluştur
    const editor = CodeMirror(document.querySelector('.code-editor'), {
        mode: 'python',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        value: '# Kodunuzu buraya yazın'
    });

    // Konuları listele
    function renderTopics() {
        topicsList.innerHTML = '';
        pythonTopics.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            const isCompleted = isTopicCompleted(topic);
            
            card.innerHTML = `
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                ${isCompleted ? '<span class="completed">✓ Tamamlandı</span>' : ''}
            `;
            card.addEventListener('click', () => loadTopic(topic));
            topicsList.appendChild(card);
        });
    }

    // Konunun tamamlanıp tamamlanmadığını kontrol et
    function isTopicCompleted(topic) {
        if (!topic.subTopics) return false;
        
        return topic.subTopics.every(subTopic => 
            subTopic.exercises.every(exercise => 
                completedExercises[`topic_${topic.id}_subtopic_${subTopic.id}_exercise_${exercise.id}`]
            )
        );
    }

    // Konuyu yükle
    function loadTopic(topic) {
        currentTopic = topic;
        currentSubTopic = topic.subTopics[0];
        currentExampleIndex = 0;
        
        topicsList.style.display = 'none';
        learningArea.style.display = 'block';
        
        updateTopicView();
    }

    // Konu görünümünü güncelle
    function updateTopicView() {
        topicTitle.textContent = currentTopic.title;
        topicDescription.textContent = currentSubTopic.description;
        
        // Örnekleri göster
        const example = currentSubTopic.examples[currentExampleIndex];
        currentQuestion.innerHTML = `
            <h4>Örnek ${currentExampleIndex + 1}:</h4>
            <p>${example.description}</p>
            <pre>${example.code}</pre>
            <p>Çıktı: ${example.output}</p>
        `;
        
        editor.setValue('');
    }

    // Puan güncelle
    function updatePoints(topicId, subTopicId, exerciseId, points) {
        const key = `topic_${topicId}_subtopic_${subTopicId}_exercise_${exerciseId}`;
        if (!completedExercises[key]) {
            userPoints += points;
            completedExercises[key] = true;
            localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
            localStorage.setItem('userPoints', userPoints);
            document.querySelector('.points').textContent = `${userPoints} Puan`;
            showNotification('Tebrikler! ' + points + ' puan kazandınız!', 'success');
        }
    }

    // Bildirim göster
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.getElementById('notifications-container').appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Kodu çalıştır ve kontrol et
    runCodeBtn.addEventListener('click', async () => {
        const code = editor.getValue();
        try {
            const output = simulatePythonOutput(code);
            codeOutput.textContent = output;

            const currentExercise = currentSubTopic.exercises[currentExampleIndex];
            if (output.trim() === currentExercise.expectedOutput) {
                updatePoints(currentTopic.id, currentSubTopic.id, currentExercise.id, currentExercise.points);
                
                if (currentExampleIndex < currentSubTopic.exercises.length - 1) {
                    currentExampleIndex++;
                    updateTopicView();
                } else if (currentTopic.subTopics.indexOf(currentSubTopic) < currentTopic.subTopics.length - 1) {
                    currentSubTopic = currentTopic.subTopics[currentTopic.subTopics.indexOf(currentSubTopic) + 1];
                    currentExampleIndex = 0;
                    updateTopicView();
                } else {
                    showNotification('Tebrikler! Bu konuyu tamamladınız!', 'success');
                    backToMenu();
                }
            } else {
                showNotification('Yanlış çıktı. Tekrar deneyin!', 'error');
            }
        } catch (error) {
            showNotification('Hata: ' + error.message, 'error');
        }
    });

    // Ana menüye dön
    function backToMenu() {
        learningArea.style.display = 'none';
        topicsList.style.display = 'grid';
        currentTopic = null;
        currentSubTopic = null;
        currentExampleIndex = 0;
        renderTopics();
    }

    // Matrix arka plan animasyonu
    function createMatrixBackground() {
        const background = document.createElement('div');
        background.className = 'code-background';
        document.body.appendChild(background);

        function createMatrixText() {
            const text = document.createElement('div');
            text.className = 'matrix-text';
            text.style.left = Math.random() * window.innerWidth + 'px';
            text.style.top = -20 + 'px';
            text.textContent = Math.random().toString(36).substring(2, 3);
            background.appendChild(text);

            let pos = -20;
            const interval = setInterval(() => {
                pos += 2;
                text.style.top = pos + 'px';
                if (pos > window.innerHeight) {
                    clearInterval(interval);
                    text.remove();
                }
            }, 50);
        }

        setInterval(createMatrixText, 100);
    }

    // Basit Python çıktı simülasyonu
    function simulatePythonOutput(code) {
        if (code.includes('print(')) {
            const match = code.match(/print\(['"](.*)['"]\)/);
            if (match) {
                return match[1];
            }
        }
        return 'Hata: Geçersiz kod';
    }

    // Sayfa yüklendiğinde
    userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
    document.querySelector('.points').textContent = `${userPoints} Puan`;
    createMatrixBackground();
    renderTopics();
}); 