const cityData = {
  mumbai: ["Gateway of India", "Marine Drive", "Juhu Beach"],
  delhi: ["Red Fort", "India Gate", "Qutub Minar"],
  bangalore: ["Lalbagh Garden", "Cubbon Park", "Bangalore Palace"],
  chennai: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
  kolkata: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple"],
  hyderabad: ["Charminar", "Golconda Fort", "Ramoji Film City"],
  pune: ["Shaniwar Wada", "Sinhagad Fort", "Aga Khan Palace"],
  jaipur: ["Hawa Mahal", "Amber Fort", "City Palace"],
  goa: ["Baga Beach", "Fort Aguada", "Anjuna Market"],
  agra: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
  varanasi: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath"],
  udaipur: ["City Palace", "Lake Pichola", "Jag Mandir"],
  amritsar: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
  shimla: ["Mall Road", "Kufri", "Jakhoo Temple"],
  manali: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
  leh: ["Pangong Lake", "Magnetic Hill", "Leh Palace"],
  kochi: ["Fort Kochi", "Chinese Fishing Nets", "Marine Drive"],
  mysore: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
  rishikesh: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat"],
  darjeeling: ["Tiger Hill", "Batasia Loop", "Darjeeling Himalayan Railway"],
  bhopal: ["Upper Lake", "Van Vihar", "Sanchi Stupa"],
  lucknow: ["Bara Imambara", "Rumi Darwaza", "Ambedkar Park"],
  ahmedabad: ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
  surat: ["Dumas Beach", "Dutch Garden", "Science Centre"],
  indore: ["Rajwada Palace", "Sarafa Bazaar", "Patalpani Waterfall"]
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

  let plan = `<h2>📍 Trip Plan</h2>`;
  plan += `<p><b>City:</b> ${city.toUpperCase()}</p>`;
  plan += `<p><b>Daily Budget:</b> ₹${dailyBudget}</p>`;

  plan += `<h3>🗺 Suggested Places:</h3><ul>`;
  places.forEach(place => {
    plan += `<li>${place}</li>`;
  });
  plan += `</ul>`;

  plan += `<h3>📅 Day-wise Plan:</h3>`;

  for (let i = 1; i <= days; i++) {
    plan += `<div class="plan">
               <b>Day ${i}:</b> Visit ${places[(i - 1) % places.length]}
             </div>`;
  }

  document.getElementById("result").innerHTML = plan;
}
