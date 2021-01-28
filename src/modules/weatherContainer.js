
const weatherContainer = () => {
  const html = `
    <div class="main bg-white shadow-lg rounded-lg p-6  w-max m-2 items-center">
    <div class=" overflow-hidden  p-6 search">
    <form class=" flex  md:flex md:justify-center ">
        <input class="w-4/4 rounded-l p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="city"/>
        <button class="px-8 rounded-r bg-green-300 hover:bg-green-600  text-white font-bold p-4 uppercase border-white-500 border-t border-b border-r">search</button>
    </form>
    <div class="px-6 py-4 weather">
      <div class="font-bold text-xl text-center city">weather in algeria</div>
      <h1 class="temp  text-5xl text-center">24&deg;C</h1>
      <img class="w-full icon  text-center" src="" alt="">
        <div class="descripton  text-center">sunny</div>
        <div class="humidity  text-center">humidity:20%</div>
        <div class="wind  text-center">wind:0km</div>
    </div>
   
  </div>

</div>`;
  return html;
};
export default weatherContainer;
