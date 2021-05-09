
// api-->"http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=645662f15726e6e523524ee96e9c063b"*/
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
//to set degree celcious
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
// to hide data
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
  //y fun use jisse page refresh na ho
  //alert("hi");
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add("data_hide");
  } else {

    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
      const response = await fetch(url);

      const data = await response.json();
      // console.log(data);
      const arrData = [data];
      //city name jese pune and country nam jese india show ke liye
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      //temp status show ke liye
      temp_real_val.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather[0].main;
      //console.log(tempMood);
      //condition to check sunny or cloudy and images show ke liye on page
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color:#f1f2f6;'></i>";

      }
      //to show data
      datahide.classList.remove('data_hide');
      cityVal = "";


    } catch {
      cityVal = " ";
      //to hide data
      datahide.classList.add("data_hide");
      city_name.innerText = `please enter the proper city name`;
      console.log('please add the proper city name');
    }

  }
}

submitBtn.addEventListener('click', getInfo);