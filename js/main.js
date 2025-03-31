document.addEventListener('DOMContentLoaded', () => {
    const topicsList = document.querySelector('.topics-list');
    const learningArea = document.querySelector('.learning-area');
    const topicTitle = document.querySelector('#topic-title');
    const topicDescription = document.querySelector('#topic-description');
    const currentQuestion = document.querySelector('#current-question');
    const codeOutput = document.querySelector('#code-output');
    const runCodeBtn = document.querySelector('#run-code');
    
    let currentTopic = null;
    let userPoints = 0;
    
    // Puan sistemi güncellemesi
    let completedExercises = {};

    function updatePoints(topicId, exerciseId, points) {
        const key = `topic_${topicId}_exercise_${exerciseId}`;
        if (!completedExercises[key]) {
            userPoints += points;
            completedExercises[key] = true;
            localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
            localStorage.setItem('userPoints', userPoints);
            document.querySelector('.points').textContent = `${userPoints} Puan`;
        }
    }

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
            card.innerHTML = `
                <h3>${topic.title}</h3>
                <p>${topic.description.substring(0, 100)}...</p>
                ${localStorage.getItem(`topic_${topic.id}_completed`) ? 
                    '<span class="completed">✓ Tamamlandı</span>' : ''}
            `;
            card.addEventListener('click', () => loadTopic(topic));
            topicsList.appendChild(card);
        });
    }

    // Konuyu yükle
    function loadTopic(topic) {
        currentTopic = topic;
        topicsList.style.display = 'none';
        learningArea.style.display = 'block';
        topicTitle.textContent = topic.title;
        topicDescription.textContent = topic.description;
        currentQuestion.textContent = topic.exercise.question;
        editor.setValue('');
    }

    // Ana menüye dön
    function backToMenu() {
        learningArea.style.display = 'none';
        topicsList.style.display = 'grid';
        currentTopic = null;
    }

    // Kodu çalıştır ve kontrol et
    runCodeBtn.addEventListener('click', async () => {
        const code = editor.getValue();
        try {
            // Burada gerçek bir Python interpreter kullanılacak
            // Şimdilik basit bir simülasyon yapıyoruz
            const output = simulatePythonOutput(code);
            codeOutput.textContent = output;

            if (output.trim() === currentTopic.exercise.expectedOutput) {
                alert('Tebrikler! Doğru cevap!');
                updatePoints(currentTopic.id, currentTopic.exercise.id, 10);
                localStorage.setItem(`topic_${currentTopic.id}_completed`, 'true');
                backToMenu();
                renderTopics();
            }
        } catch (error) {
            codeOutput.textContent = `Hata: ${error.message}`;
        }
    });

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

    // Sayfa yüklendiğinde puanları yükle
    userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
    document.querySelector('.points').textContent = `${userPoints} Puan`;

    // Konuları yükle
    renderTopics();

    // Bildirim gösterme fonksiyonu
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
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

    // Matrix benzeri arka plan animasyonu
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

    // Sayfa yüklendiğinde arka plan animasyonunu başlat
    createMatrixBackground();
}); 