const cityData = {
  mumbai: ["Gateway of India", "Marine Drive", "Juhu Beach"],
  delhi: ["Red Fort", "India Gate", "Qutub Minar"],
  goa: ["Baga Beach", "Fort Aguada", "Anjuna Market"],
  jaipur: ["Hawa Mahal", "Amber Fort", "City Palace"],
  bangalore: ["Lalbagh", "Cubbon Park", "Bangalore Palace"],
  chennai: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St George"],
  hyderabad: ["Charminar", "Golconda Fort", "Ramoji Film City"],
  kolkata: ["Howrah Bridge", "Victoria Memorial", "Dakshineswar Temple"],
  pune: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"],
  ahmedabad: ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
  surat: ["Dumas Beach", "Dutch Garden", "Science Centre"],
  lucknow: ["Bara Imambara", "Rumi Darwaza", "Hazratganj"],
  chandigarh: ["Rock Garden", "Sukhna Lake", "Rose Garden"],
  udaipur: ["City Palace", "Lake Pichola", "Fateh Sagar Lake"],
  varanasi: ["Kashi Vishwanath", "Dashashwamedh Ghat", "Sarnath"],
  amritsar: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
  mysore: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
  kochi: ["Fort Kochi", "Chinese Fishing Nets", "Marine Drive"],
  manali: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
  shimla: ["Mall Road", "Jakhoo Temple", "Christ Church"],
  darjeeling: ["Tiger Hill", "Batasia Loop", "Tea Gardens"],
  rishikesh: ["Laxman Jhula", "Triveni Ghat", "River Rafting"],
  leh: ["Pangong Lake", "Magnetic Hill", "Shanti Stupa"],
  andaman: ["Radhanagar Beach", "Cellular Jail", "Ross Island"],
  nagpur: ["Deekshabhoomi", "Futala Lake", "Ambazari Garden"]
};

function generatePlan() {
  const city = document.getElementById("city").value;
  const days = parseInt(document.getElementById("days").value);
  const budget = parseInt(document.getElementById("budget").value);

  if (!city || !days || !budget) {
    alert("Please fill all fields!");
    return;
  }

  const places = cityData[city];
  let dailyBudget = Math.floor(budget / days);

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
        <b>Day ${i}:</b> Visit ${places[(i - 1) % places.length]}
      </div>
    `;
  }

  document.getElementById("result").innerHTML = output;
}
