let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

  const movieArray = JSON.parse(localStorage.getItem('MovieList'));
    console.log(movieArray);

    function addToTable() {
      const table = document.querySelector('#movie-table tbody');
    
    for (let title in movieArray) {
      const movie = movieArray[title];
      const row = table.insertRow();
      const titleCell = row.insertCell();
      const yearCell = row.insertCell();
      const plotCell = row.insertCell();
      const castCell = row.insertCell();
      const runtimeCell = row.insertCell();
      const ratingCell = row.insertCell();
      
      
  
      titleCell.textContent = movie.title;
      plotCell.textContent = movie.plot;
      castCell.textContent = movie.cast;
      runtimeCell.textContent = movie.runtime;
      ratingCell.textContent = movie.rating;
      yearCell.textContent = movie.year;
    }
  }

  function populateTable() {
    const table = document.querySelector('#movie-table tbody');
    
    for (let title in movieData) {
      const movie = movieData[title];
      const row = table.insertRow();
      const titleCell = row.insertCell();
      const yearCell = row.insertCell();
      const plotCell = row.insertCell();
      const castCell = row.insertCell();
      const runtimeCell = row.insertCell();
      const ratingCell = row.insertCell();
      
  
      titleCell.textContent = title;
      plotCell.textContent = movie.plot;
      castCell.textContent = movie.cast.join(', ');
      runtimeCell.textContent = movie.runtime;
      ratingCell.textContent = movie.rating;
      yearCell.textContent = movie.year;
    }
  }

  function openForm() {
    document.getElementById('form-box').style.display = 'block';
  }

  function closeForm() {
    document.getElementById('form-box').style.display = 'none';
  }
/*
  /**
   * 
   * @param {HTMLTableElement} table 
   * @param {number} column The index of the colum to sort
   * @param {boolean} asc determines if the sorting will be ascending 
   


  function sortTableByColumn(table, column, asc = true){
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelector("tr"));

    const sortedRows = rows.sort ((a, b) => {
      console.log(a);
      console.log(b);
    });
  }

  sortTableByColumn(document.querySelector("movie-table"), 1);*/

function sortTable(n, evt){
  var table = document.querySelector('table'),
    thead = document.querySelector('thead'),
    tbody = document.querySelector('tbody'),
    bRows = [...tbody.rows],
    hData = [...thead.querySelectorAll('th')],
    desc = false;

  hData.map ( (head) => {
    if (head != evt ) {
      head.classList.remove('asc', 'desc');
    }
  });

  desc = evt.classList.contains ('asc') ? true : false;
  evt.classList[desc ? 'remove' : 'add']('asc');
  evt.classList[desc ? 'add' : 'remove']('desc');
    
  tbody.innerHTML = '';

    bRows.sort( (a, b) => {
      let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase(),
          y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        return desc ? (x < y ? 1 : -1) : (x < y ? -1 : 1);
    });
    bRows.map ( (bRow) => {
      tbody.appendChild(bRow);
    })
}