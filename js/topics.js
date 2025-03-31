const pythonTopics = [
    {
        id: 1,
        title: "Print Komutu",
        description: `Python'da print() fonksiyonu, ekrana çıktı vermek için kullanılır. 
        
Temel sözdizimi:
print("Metin")  # Metin çıktısı
print(42)       # Sayı çıktısı
print("Sayı:", 42)  # Birden fazla değer

Print fonksiyonu, programınızın çıktılarını görüntülemek, hata ayıklama yapmak ve kullanıcıya bilgi göstermek için kullanılır.`,
        subTopics: [
            {
                id: "1.1",
                title: "Temel Print Kullanımı",
                description: "Print fonksiyonunun en temel kullanımı metin (string) ve sayıları ekrana yazdırmaktır.",
                examples: [
                    {
                        id: 1,
                        description: "Metin yazdırma:",
                        code: 'print("Merhaba Dünya")',
                        output: "Merhaba Dünya",
                        points: 5
                    },
                    {
                        id: 2,
                        description: "Sayı yazdırma:",
                        code: 'print(42)',
                        output: "42",
                        points: 5
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "Ekrana 'Python Öğreniyorum!' yazısını yazdırın",
                        expectedOutput: "Python Öğreniyorum!",
                        hints: ["Print fonksiyonunu kullanın", "Metni tırnak içine alın"],
                        points: 10
                    },
                    {
                        id: 2,
                        question: "Ekrana kendi adınızı yazdırın",
                        expectedOutput: "Ahmet",
                        hints: ["Adınızı tırnak içinde yazın"],
                        points: 10
                    }
                ]
            },
            {
                id: "1.2",
                title: "Gelişmiş Print Kullanımı",
                description: `Print fonksiyonu birden fazla değeri virgülle ayırarak yazdırabilir.
Ayrıca özel karakterler kullanarak satır atlama (\\n) ve sekme (\\t) ekleyebilirsiniz.`,
                examples: [
                    {
                        id: 1,
                        description: "Birden fazla değer yazdırma:",
                        code: 'print("Sayı:", 42, "Metin:", "Python")',
                        output: "Sayı: 42 Metin: Python",
                        points: 10
                    },
                    {
                        id: 2,
                        description: "Özel karakterler kullanma:",
                        code: 'print("Satır 1\\nSatır 2\\nSatır 3")',
                        output: "Satır 1\nSatır 2\nSatır 3",
                        points: 15
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "Adınızı ve yaşınızı aynı satırda yazdırın (örn: 'Ahmet: 25')",
                        expectedOutput: "Ahmet: 25",
                        hints: ["Virgül kullanarak birden fazla değer yazdırabilirsiniz"],
                        points: 15
                    },
                    {
                        id: 2,
                        question: "İki satıra isim ve meslek yazdırın (örn: 'İsim: Ahmet\\nMeslek: Öğrenci')",
                        expectedOutput: "İsim: Ahmet\nMeslek: Öğrenci",
                        hints: ["\\n karakteri yeni satıra geçer"],
                        points: 20
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Değişkenler ve Veri Tipleri",
        description: "Python'da değişkenler ve temel veri tiplerini öğrenin.",
        subTopics: [
            {
                id: "2.1",
                title: "Temel Veri Tipleri",
                description: "Python'daki temel veri tipleri: int, float, str, bool",
                examples: [
                    {
                        id: 1,
                        description: "Sayısal veri tipleri:",
                        code: `sayi = 42          # int (tam sayı)
ondalik = 3.14     # float (ondalıklı sayı)
print(type(sayi))
print(type(ondalik))`,
                        output: "<class 'int'>\n<class 'float'>",
                        points: 15
                    }
                ],
                exercises: [
                    {
                        id: 1,
                        question: "Bir tam sayı ve bir ondalıklı sayı tanımlayıp türlerini yazdırın",
                        expectedOutput: "<class 'int'>\n<class 'float'>",
                        hints: ["type() fonksiyonunu kullanın"],
                        points: 20
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Koşul İfadeleri",
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