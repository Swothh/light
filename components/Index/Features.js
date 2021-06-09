const features = [
  {
    name: 'Dil Desteği',
    description: 'Dil sistemimiz tamamen json tabanlı olduğundan dolayı kolayca dil ekleyebilmekteyiz. Eğer sizde dil eklenmesine yardımcı/katkıda bulunmak isterseniz dil destek sayfamızı inceleyin.',
    icon: 'fas fa-language'
  },
  {
    name: 'Düşük Ping',
    description: 'Temiz ve optimize bir şekilde kodlandığından dolayı ping artışı fazla yaşanmayacaktır. Yaşanması durumunda düşürmek için elimizden gelenin en iyisini yapmaya hazırız.',
    icon: 'fas fa-server'
  },
  {
    name: 'Güvenlik',
    description: 'Tamamen sizin güvenliğizi sağlayacak şekilde tasarlandı, kodlandı. Daha detaylı bilgi için gizlilik politikamıza göz atabilirsiniz.',
    icon: 'fas fa-shield'
  },
  {
    name: 'Full Responsive',
    description: 'Websitemiz %99 tüm cihazlara uyumlu bir biçimde kodlandı ve sizlere daha iyi bir tasarım sunuyor.',
    icon: 'fas fa-mobile'
  }
];

export default function Features() {
  return (
    <div className="py-12 bg-dark-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Neden biz?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Özellikler
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <i className={feature.icon}></i>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-100">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};