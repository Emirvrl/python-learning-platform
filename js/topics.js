const pythonTopics = [
    {
        id: 1,
        title: "Print Komutu",
        description: "Print komutu, Python'da ekrana çıktı vermek için kullanılır. Metinleri, sayıları ve değişkenleri görüntüleyebilirsiniz.",
        examples: [
            'print("Merhaba Dünya")',
            'print(42)',
            'print("Sayı:", 5)'
        ],
        exercise: {
            question: "Ekrana 'Python Öğreniyorum!' yazısını yazdıran kodu yazınız.",
            expectedOutput: "Python Öğreniyorum!",
            hints: ["Print fonksiyonunu kullanın", "Metni tırnak içine almayı unutmayın"]
        }
    },
    {
        id: 2,
        title: "Değişkenler",
        description: "Değişkenler, verileri saklamak için kullanılan yapılardır. Python'da değişken tanımlarken tip belirtmeye gerek yoktur.",
        examples: [
            'isim = "Ahmet"',
            'yas = 25',
            'print(isim, yas)'
        ],
        exercise: {
            question: "Bir 'mesaj' değişkeni oluşturun ve içine 'Merhaba!' yazıp ekrana yazdırın.",
            expectedOutput: "Merhaba!",
            hints: ["Önce değişkeni tanımlayın", "Sonra print ile yazdırın"]
        }
    }
]; 