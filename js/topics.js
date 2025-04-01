const pythonTopics = [
    {
        id: 1,
        title: "Print Komutu",
        shortDescription: "Print Fonksiyonunun Öğrenilmesi",
        learningContent: {
            description: `Python'da print() fonksiyonu, ekrana çıktı vermek için kullanılır.
            
Temel sözdizimi:
print("Metin")  # Metin çıktısı
print(42)       # Sayı çıktısı
print("Sayı:", 42)  # Birden fazla değer`,
            examples: [
                {
                    description: "Metin yazdırma:",
                    code: 'print("Merhaba Python")',
                    output: "Merhaba Python"
                },
                {
                    description: "Sayı yazdırma:",
                    code: 'print(42)',
                    output: "42"
                }
            ],
            videoUrl: "https://www.youtube.com/watch?v=example"
        },
        quizContent: {
            questions: [
                {
                    question: "Ekrana 'Python Öğreniyorum!' yazısını yazdırın",
                    expectedOutput: "Python Öğreniyorum!",
                    points: 10
                },
                {
                    question: "Ekrana önce adınızı, sonra yaşınızı yazdırın (örn: 'Ahmet 25')",
                    expectedOutput: "Ahmet 25",
                    points: 15
                }
            ]
        }
    },
    {
        id: 2,
        title: "Değişkenler ve Veri Tipleri",
        shortDescription: "Python'da Veri Tiplerinin Öğrenilmesi",
        description: `Python'da değişkenler, verileri saklamak için kullanılan yapılardır. 
        
Temel sözdizimi:
degisken_adi = deger

Python'da yaygın kullanılan veri tipleri:
- int: Tam sayılar (1, -5, 1000)
- float: Ondalıklı sayılar (3.14, -0.001)
- str: Metinler ("Merhaba", 'Python')
- bool: Mantıksal değerler (True, False)

Değişken isimlendirme kuralları:
- Harf veya alt çizgi ile başlamalı
- Rakam içerebilir ama rakamla başlayamaz
- Büyük-küçük harf duyarlıdır (age ≠ Age)`,
        subTopics: [
            {
                id: "2.1",
                title: "Temel Veri Tipleri",
                description: "Python'daki temel veri tiplerini ve kullanımlarını öğrenin.",
                examples: [
                    {
                        id: 1,
                        description: "Sayısal veri tipleri:",
                        code: `tam_sayi = 42          # int
ondalik_sayi = 3.14    # float
print(type(tam_sayi))
print(type(ondalik_sayi))`,
                        output: "<class 'int'>\n<class 'float'>",
                        points: 15
                    },
                    {
                        id: 2,
                        description: "Metin ve mantıksal veri tipleri:",
                        code: `metin = "Python"       # str
dogru_mu = True        # bool
print(type(metin))
print(type(dogru_mu))`,
                        output: "<class 'str'>\n<class 'bool'>",
                        points: 15
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "Bir tam sayı ve bir ondalıklı sayı tanımlayıp türlerini yazdırın",
                        expectedOutput: "<class 'int'>\n<class 'float'>",
                        hints: ["type() fonksiyonunu kullanın", "Sayıları değişkenlere atayın"],
                        points: 20
                    },
                    {
                        id: 2,
                        question: "Adınızı bir değişkene atayıp türünü yazdırın",
                        expectedOutput: "<class 'str'>",
                        hints: ["Metinler tırnak içinde yazılır", "type() ile türünü kontrol edin"],
                        points: 20
                    }
                ]
            },
            {
                id: "2.2",
                title: "Tip Dönüşümleri",
                description: "Veri tipleri arasında dönüşüm yapma yöntemleri",
                examples: [
                    {
                        id: 1,
                        description: "Sayıdan metine dönüşüm:",
                        code: `sayi = 42
metin = str(sayi)
print(type(metin))
print(metin + " yaşında")`,
                        output: "<class 'str'>\n42 yaşında",
                        points: 20
                    },
                    {
                        id: 2,
                        description: "Metinden sayıya dönüşüm:",
                        code: `metin_sayi = "3.14"
sayi = float(metin_sayi)
print(type(sayi))
print(sayi * 2)`,
                        output: "<class 'float'>\n6.28",
                        points: 20
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "Verilen '42' metnini tam sayıya çevirip 8 ile çarpın",
                        expectedOutput: "336",
                        hints: ["int() fonksiyonunu kullanın", "Sonucu print ile yazdırın"],
                        points: 25
                    },
                    {
                        id: 2,
                        question: "15 sayısını metne çevirip başına 'Sayı: ' ekleyerek yazdırın",
                        expectedOutput: "Sayı: 15",
                        hints: ["str() ile sayıyı metne çevirin", "İki metni + ile birleştirin"],
                        points: 25
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Koşul İfadeleri",
        shortDescription: "if-else Yapılarının Öğrenilmesi",
        description: "if, elif ve else yapılarını öğrenin.",
        subTopics: [
            {
                id: "3.1",
                title: "if-else Yapısı",
                description: "Temel koşul ifadeleri",
                examples: [
                    {
                        id: 1,
                        description: "Basit if-else kullanımı:",
                        code: `yas = 18
if yas >= 18:
    print("Ehliyet alabilirsiniz")
else:
    print("Ehliyet alamazsınız")`,
                        output: "Ehliyet alabilirsiniz",
                        points: 20
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "Sayının pozitif olup olmadığını kontrol eden kodu yazın",
                        expectedOutput: "Pozitif sayı",
                        hints: ["if kullanın", "Sayıyı 0 ile karşılaştırın"],
                        points: 25
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Matematiksel İşlemler",
        shortDescription: "Temel Matematik Operatörlerinin Öğrenilmesi",
        description: "Python'da toplama, çıkarma, çarpma, bölme gibi temel matematiksel işlemleri öğrenin.",
        examples: [
            'print(5 + 3)',
            'print(10 - 4)',
            'print(6 * 2)'
        ],
        exercise: {
            question: "5 ile 3'ün çarpımını ekrana yazdıran kodu yazınız.",
            expectedOutput: "15",
            hints: ["Çarpma işlemi için * işareti kullanılır"]
        }
    },
    {
        id: 5,
        title: "Döngüler",
        shortDescription: "Python'da Döngülerin Öğrenilmesi",
        description: "Python'da for ve while döngülerini öğrenin.",
        subTopics: [
            {
                id: "5.1",
                title: "for Döngüsü",
                description: "Tekrarlı işlemler için for döngüsü kullanımı",
                examples: [
                    {
                        id: 1,
                        description: "Liste üzerinde döngü:",
                        code: `sayilar = [1, 2, 3, 4, 5]
for sayi in sayilar:
    print(sayi)`,
                        output: "1\n2\n3\n4\n5",
                        points: 10
                    },
                    {
                        id: 2,
                        description: "range() kullanımı:",
                        code: `for i in range(3):
    print(f"Sayı: {i}")`,
                        output: "Sayı: 0\nSayı: 1\nSayı: 2",
                        points: 15
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "1'den 5'e kadar olan sayıların toplamını hesaplayan kodu yazın",
                        expectedOutput: "Toplam: 15",
                        hints: ["range() fonksiyonunu kullanın", "Toplam için bir değişken tanımlayın"],
                        points: 20
                    }
                ]
            },
            {
                id: "5.2",
                title: "while Döngüsü",
                description: "Koşula bağlı döngüler",
                examples: [
                    {
                        id: 1,
                        description: "Sayaç örneği:",
                        code: `sayac = 0
while sayac < 3:
    print(f"Sayaç: {sayac}")
    sayac += 1`,
                        output: "Sayaç: 0\nSayaç: 1\nSayaç: 2",
                        points: 15
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "1'den başlayarak kullanıcının girdiği sayıya kadar olan çift sayıları yazdıran kodu yazın",
                        expectedOutput: "2 4 6 8 10",
                        hints: ["while döngüsü kullanın", "Sayı çift mi kontrolü yapın"],
                        points: 25
                    }
                ]
            }
        ],
        exercises: [
            {
                id: 1,
                question: "Çarpım tablosunu oluşturan kodu yazın (1x1'den 5x5'e kadar)",
                expectedOutput: "1 x 1 = 1\n1 x 2 = 2\n...\n5 x 5 = 25",
                hints: ["İç içe döngüler kullanın", "f-string ile formatlamayı kullanın"],
                points: 30
            }
        ]
    }
]; 