# otrretreading.com — Dev Agent Master Prompt & Roadmap

Bu doküman, **otrretreading.com** için kurumsal/endüstriyel tasarım diliyle (derin lacivert + canlı turuncu), yüksek dönüşüm odaklı ve SEO uyumlu web mimarisi geliştirmek üzere hazırlanmış kapsamlı geliştirici promptudur.

---

## 1) Dev Agent Master Prompt (Kopyala-Yapıştır)

```txt
Sen kıdemli bir Full-Stack Geliştirici ve SEO Uzmanısın. otrretreading.com domain için modern lacivert/turuncu endüstriyel tasarım dilini temel alan, hem OTR lastik yenileme hizmetini hem de kauçuk/yarı mamul tedarikçi kimliğini net anlatan bir web sitesi inşa et.

Öncelikler:
1) Dual-Value Proposition:
   - Aynı ana çatı altında iki net kanal göster:
     A) Retreading Services (servis sağlayıcı)
     B) Technical Compounds & Semi-Finished Supply (tedarikçi)
2) Conversion:
   - Her ana sayfada belirgin CTA yerleştir: “Request a Quote”, “Become a Partner”, “Technical Catalog Download”.
3) E-E-A-T:
   - Technical Guide ve R&D sayfalarıyla uzmanlık göster.
   - Sertifikasyonlar (ISO vb.), laboratuvar verisi, ve ölçülebilir vaka çalışmaları sun.
4) SEO:
   - Sayfa bazlı title/meta/Open Graph.
   - JSON-LD: Organization, Product, Service, FAQPage.
   - Teknik FAQ blokları ve iç linkleme.
5) Görsel/Tasarım Dili:
   - Renkler: Deep Industrial Blue (#001A3D), Safety Orange (#FF5500), White.
   - Geniş hero alanları, diagonal section geçişleri, yüksek kalite üretim/lastik görselleri.
   - Turuncu CTA butonlar, güçlü hover/focus state.
6) Teknoloji:
   - Tailwind CSS tabanlı tasarım sistemi.
   - Bileşen tabanlı sayfa yapısı, tekrar kullanılabilir section’lar.
7) Teslimat:
   - Sitemap, SEO uyumlu URL planı, component listesi, Tailwind tema konfigürasyonu ve uygulama roadmap’i üret.
```

---

## 2) Bilgi Mimarisi (Sitemap)

- `/` Home (Conversion Hub)
- `/solutions`
  - `/solutions/retreading-systems`
  - `/solutions/tyre-machinery`
  - `/solutions/otr-services`
  - `/solutions/technical-compounds`
- `/resources`
  - `/resources/blog`
  - `/resources/guides`
  - `/resources/technical-data-sheets`
- `/company`
  - `/company/history`
  - `/company/sustainability`
  - `/company/careers`
  - `/company/rd-lab`
  - `/company/certifications`
- `/case-studies`
- `/faq`
- `/contact`

---

## 3) Sayfa Bazlı İçerik ve Dönüşüm Kurgusu

- **Home:** Çift değer önerisi (Service vs Supplier) için iki ana giriş kartı + “Our Edge” (amiral gemisi teknoloji/3D exploded view) + hızlı teklif CTA.
- **Solutions:** Retreading, Machinery, Compounds için ikon tabanlı teknik modüller ve kullanım senaryoları.
- **Resources:** Teknik makaleler, rehberler, data sheet indirme.
- **Company:** Araştırma-Geliştirme (Ar-Ge), kalite ve sürdürülebilirlik ispatı.
- **Case Studies:** Ölçülebilir kazanımlar (% maliyet düşüşü, ömür artışı, operasyonel verim).
- **FAQ:** Lastik ömrü, green tire üretimi, lojistik ve tedarik süreçleri.
- **Contact:** Global inquiry form + bölgesel satış/teknik ekip temasları.

---

## 4) SEO Planı

### Hedef Anahtar Kelimeler
- OTR retreading supplier
- precured rings for mining
- rubber compounding services
- industrial tire renewal

### Teknik İçerik Başlıkları
- OTR Retreading Guide
- Compound Selection for Mining Tires
- OTR Tyre Lifecycle Optimization
- Sustainable Retreading for Heavy Industry

### JSON-LD Şema Kapsamı
- `Organization` (kurumsal kimlik, iletişim, logo, sameAs)
- `Product` (retread/pre-cured ürün kartları)
- `Service` (retreading, inspection, logistics)
- `FAQPage` (teknik SSS)

---

## 5) Tailwind Tema Konfigürasyonu (Öneri)

```js
// tailwind.config.js (öneri)
export default {
  theme: {
    extend: {
      colors: {
        industrialBlue: '#001A3D',
        safetyOrange: '#FF5500'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        cta: '0 10px 25px rgba(255,85,0,0.25)'
      }
    }
  }
}
```

---

## 6) Component Roadmap

- `HeroSplitValue` (Service/Supplier dual hero)
- `DiagonalSection`
- `IndustrialCTAButton`
- `SolutionsGrid`
- `CertificationsBanner`
- `RDMetricsPanel`
- `CaseStudyCard`
- `TechnicalGuideList`
- `DataSheetDownloadTable`
- `FAQAccordion`
- `GlobalInquiryForm`
- `SchemaInjector` (JSON-LD çıktıları)

---

## 7) E-E-A-T Güçlendirme Checklist

- Laboratuvar süreçleri ve kalite metrikleri
- Sertifikasyon rozetleri ve doğrulanabilir belge bağlantıları
- Uzman ekip/proses anlatımı
- Sayısal vaka çalışmaları
- Teknik içeriklerde yazar/profil bilgisi

---

## 8) Uygulama Aşamaları (Roadmap)

1. **Foundation:** Tailwind theme, global layout, header/footer, CTA sistemi
2. **Core Pages:** Home + Solutions + Contact
3. **Authority Layer:** R&D, Certifications, Case Studies, FAQ
4. **SEO Layer:** metadata, JSON-LD, internal link planı, sitemap/robots
5. **Content Engine:** Blog/Guides/Data Sheets şablonları
6. **Optimization:** performans, görsel sıkıştırma, form dönüşüm iyileştirmeleri
