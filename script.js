const cityData = {
  goa: ["Baga Beach", "Fort Aguada", "Anjuna Market"],
  mumbai: ["Gateway of India", "Marine Drive", "Juhu Beach"],
  delhi: ["India Gate", "Red Fort", "Qutub Minar"],
  jaipur: ["Hawa Mahal", "Amber Fort", "City Palace"],
  agra: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
  chennai: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St George"],
  bangalore: ["Lalbagh", "Cubbon Park", "Bangalore Palace"],
  hyderabad: ["Charminar", "Golconda Fort", "Ramoji Film City"],
  kolkata: ["Howrah Bridge", "Victoria Memorial", "Dakshineswar Temple"],
  pune: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
  manali: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
  shimla: ["Mall Road", "Jakhoo Temple", "Kufri"],
  darjeeling: ["Tiger Hill", "Batasia Loop", "Darjeeling Zoo"],
  ooty: ["Ooty Lake", "Botanical Garden", "Doddabetta Peak"],
  mysore: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
  varanasi: ["Kashi Vishwanath", "Dashashwamedh Ghat", "Sarnath"],
  amritsar: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
  udaipur: ["City Palace", "Lake Pichola", "Fateh Sagar Lake"],
  jaisalmer: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli"],
  rishikesh: ["Lakshman Jhula", "Triveni Ghat", "River Rafting"],
  leh: ["Pangong Lake", "Magnetic Hill", "Leh Palace"],
  andaman: ["Radhanagar Beach", "Cellular Jail", "Ross Island"],
  kochi: ["Fort Kochi", "Chinese Fishing Nets", "Marine Drive"],
  kovalam: ["Lighthouse Beach", "Hawa Beach", "Samudra Beach"],
  gangtok: ["MG Marg", "Tsomgo Lake", "Nathula Pass"],
  shillong: ["Umiam Lake", "Elephant Falls", "Shillong Peak"]
};

function generatePlan() {
  const city = document.getElementById("city").value;
  const days = parseInt(document.getElementById("days").value);
  const budget = parseInt(document.getElementById("budget").value);

  if (!days || !budget) {
    alert("Please enter valid details!");
    return;
  }

  const places = cityData[city];
  const dailyBudget = Math.floor(budget / days);

  let output = `
    <h2>📍 Trip Plan</h2>
    <p><b>City:</b> ${city.toUpperCase()}</p>
    <p><b>Daily Budget:</b> ₹${dailyBudget}</p>

    <h3>🗺 Places to Visit:</h3>
    <ul>
      ${places.map(place => `<li>${place}</li>`).join("")}
    </ul>

    <h3>📅 Day-wise Plan:</h3>
  `;

  for (let i = 1; i <= days; i++) {
    output += `
      <div class="plan">
        Day ${i}: Visit ${places[(i - 1) % places.length]}
      </div>
    `;
  }

  document.getElementById("result").innerHTML = output;
}
