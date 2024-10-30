function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        li[i].style.color = 'green';
      } else {
        li[i].style.display = "none";
      }
    }
  }

  // letecode.com 



function initPleinEcran() {
    document.querySelector('body').innerHTML += `
    <style>
    #plein-ecran-btn.plein-ecran
    {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1001;
        padding: 10px;
    }
    #police-plus-btn.plein-ecran
    {
        position: fixed;
        top: 40px;
        right: 43px;
        z-index: 1001;
        padding: 10px;
    }
    #police-moins-btn.plein-ecran
    {
        position: fixed;
        top: 40px;
        right: 5px;
        z-index: 1001;
        padding: 10px;
    }
    table.plein-ecran {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background-color: white;
    }

    body.dark table.plein-ecran
    {
        background-color: black;
    }
    </style>
    `;

    var themeContainer = document.querySelector('.theme');

    if (themeContainer)
    {
        themeContainer.innerHTML += `
            <button id="plein-ecran-btn">Plein ecran</button>
            <button id="police-plus-btn">+</button>
            <button id="police-moins-btn">-</button>
        `
    }

    var pleinEcran = document.querySelector('#plein-ecran-btn');
    var policePlus = document.querySelector('#police-plus-btn');
    var policeMoins = document.querySelector('#police-moins-btn');

    if (pleinEcran)
    {
        pleinEcran.addEventListener('click', (e) => {
            if ( document.querySelector('table').classList.contains('plein-ecran') == true )
            {
                document.querySelector('table').classList.remove('plein-ecran');
                document.querySelector('#plein-ecran-btn').classList.remove('plein-ecran');
                document.querySelector('#police-plus-btn').classList.remove('plein-ecran');
                document.querySelector('#police-plus-btn').classList.remove('plein-ecran');
            }
            else
            {
                document.querySelector('table').classList.add('plein-ecran');
                document.querySelector('#plein-ecran-btn').classList.add('plein-ecran');
                document.querySelector('#police-plus-btn').classList.add('plein-ecran');
                document.querySelector('#police-moins-btn').classList.add('plein-ecran');

            }
        })
    }

    if (policePlus)
    {
        policePlus.addEventListener('click', (e) => {
            document.querySelectorAll('pre.western').forEach(item => {
                var value = item.style.fontSize;
                if ( item.style.fontSize == '' )
                {
                    value = '10pt';
                }

                value = parseInt(value.replace('pt', ''))
                value++;
                item.style.fontSize = value + 'pt';
            });
        });
    }
    if (policeMoins)
    {
        policeMoins.addEventListener('click', (e) => {
            document.querySelectorAll('pre.western').forEach(item => {
                var value = item.style.fontSize;
                if ( item.style.fontSize == '' )
                {
                    value = '10pt';
                }

                value = parseInt(value.replace('pt', ''))
                value--;
                item.style.fontSize = value + 'pt';
            });
        });
    }

    /// window.getComputedStyle(document.querySelector('pre.western')).fontSize = '12px'
}

initPleinEcran();


var toggle_btn = document.getElementById('theme-btn');
var body = document.getElementsByTagName('body')[0];

var dark_theme_class = 'dark';

toggle_btn.addEventListener('click', function() {
    if (body.classList.contains(dark_theme_class)) {
    
        body.classList.remove(dark_theme_class);
    }
    else {
        body.classList.add(dark_theme_class);
    }
});
