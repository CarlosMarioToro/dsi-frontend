window.onload = function () {
  const tabs = document.querySelectorAll("[data-tab-target]");
  // console.log(tabs);
  const activeClass = 'bg-blue-600';
  const activeFont = "text-white";
  // tabs[0].classList.add(activeClass);
  // tabs[0].classList.add(activeFont);
  // tabs[0].classList.remove("text-gray-700");
  // document.querySelector("#tab1").classList.remove("hidden");

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetContent = document.querySelector(tab.dataset.tabTarget);
      document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
      targetContent.classList.remove('hidden');

      document.querySelectorAll('.bg-blue-600').forEach(activeTab => activeTab.classList.remove(activeClass));
      document.querySelectorAll('.text-white').forEach(activeTab => {
        activeTab.classList.remove(activeFont)
        activeTab.classList.add('text-gray-700')
      });
      tab.classList.add(activeClass);
      tab.classList.add(activeFont);
      tab.classList.remove("text-gray-700");
    })
  })
};

const CrearRef = () => {
    return (
        <>
          <section className="container w-full h-full items-center">
            <div className="flex flex-col items-center h-full w-auto bg-gray-300 rounded-lg p-4 bg-opacity-75">
              <h1 className="w-full p-3 bg-gray-500 rounded-t-lg">Ficha Tecnica</h1>
              <div className="w-auto h-full bg-white bg-opacity-75">
                <div className="flex justify-evenly gap-1">
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab1">General</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab2">Procesos</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab3">Pintas de Produccion</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab4">Insumos</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab5">Telas</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab6">Piezas</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab7">Sesgos</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab8">Codigos de Barras</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab9">Lotes(O.P.)</button>
                  <button className="p-2 text-gray-700 text-sm rounded-lg hover:bg-gray-700 hover:bg-opacity-40" data-tab-target="#tab10">Referencias</button>
                </div>
                <div className="mt-4">
                  <div id="tab1" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate porro numquam a nemo accusantium, commodi repudiandae, beatae consequuntur, nobis molestiae voluptatem cumque earum ducimus rerum ab quibusdam architecto possimus distinctio.</p>
                  </div>
                  <div id="tab2" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, perspiciatis ut error vel praesentium exercitationem vero impedit iure nesciunt sit eaque adipisci quo alias officiis minima quis reiciendis omnis ipsam!</p>
                  </div>
                  <div id="tab3" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi provident eveniet hic tempore porro itaque aut, commodi fugit voluptatem enim ipsam alias quibusdam laudantium, voluptatibus libero temporibus nihil neque.</p>
                  </div>
                  <div id="tab4" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio quis, dignissimos quas enim, ad quibusdam excepturi reprehenderit corrupti consequatur beatae accusamus provident, ullam eum sint tenetur reiciendis maxime magni?</p>
                  </div>
                  <div id="tab5" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aspernatur eum repudiandae molestiae suscipit sunt debitis praesentium quae dolorem harum quam corporis eaque magnam! Odit dolorem ratione incidunt distinctio provident.</p>
                  </div>
                  <div id="tab6" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nam doloribus tempora culpa quasi quas sunt ipsam nemo voluptatibus sint, esse, veniam, modi sed velit tenetur ea cum itaque adipisci?</p>
                  </div>
                  <div id="tab7" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quaerat aperiam minima ex dolorum, ad odio, sapiente, reprehenderit culpa tempore porro veritatis est. Sequi facere voluptatibus itaque ab saepe dolores.</p>
                  </div>
                  <div id="tab8" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam delectus, beatae consectetur, dolores sunt quod recusandae sapiente atque provident ut, quisquam soluta reiciendis. Corrupti deleniti deserunt sed quia illum ad.</p>
                  </div>
                  <div id="tab9" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur facere, earum corporis nostrum quos quam perferendis facilis, veniam maxime doloribus placeat ut recusandae maiores voluptatibus magni possimus dignissimos velit officia.</p>
                  </div>
                  <div id="tab10" className="h-[calc(84vh-90px)] tab-content text-gray-700 hidden">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione a molestias tenetur laborum magni soluta ut inventore reiciendis eius. Labore rem, fuga aspernatur nihil corrupti deserunt nostrum ut voluptatem.</p>
                  </div>
                </div>
              </div>                    
            </div>
          </section>
        </>
    );
};

export default CrearRef;
