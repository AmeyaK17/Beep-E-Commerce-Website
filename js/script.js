var categoryPathName = document.getElementById("category-path-name")

// All Categories
$(document).ready(function(){
    'use strict';

    $('.categories-list li a').click(function(){
        'use strict';

        $('.categories-list li a').removeClass("active");
        $(this).addClass("active");
        
        //Change innerText for the "Category Path"
        var text = jQuery(this).text();
        categoryPathName.innerText = text
    })
});

// Brand List
$(document).ready(function(){
    'use strict';

    $('.brand-list ul li a').click(function(){
        'use strict';

        $('.brand-list ul li a').removeClass("active");
        $(this).addClass("active");
    })
});

// Page Indicators
$(document).ready(function(){
    'use strict';

    $('.page-indicators a').click(function(){
        'use strict';

        $('.page-indicators a').removeClass("active");
        $(this).addClass("active");
    })
});

// Items
$(document).ready(function(){
    'use strict';

    $('.item-title a').click(function(){
        'use strict';

        $('.item-title a').removeClass("active");
        $(this).addClass("active");
    })
});

//Min-Max Validation
var minBox = document.getElementById("minBox")
var maxBox = document.getElementById("maxBox")

minBox.addEventListener('change', (e) => {
    maxValue = e.currentTarget.value;
});

maxBox.addEventListener('change', (e) => {
    maxValue = e.currentTarget.value;
});

function minFunc(){
    var minVal = parseInt(document.getElementById("minBox").value);
    var maxVal = parseInt(document.getElementById("maxBox").value);
    
    if(minVal > maxVal){
        alert("Minimum price cannot be greater than Maximum price!")
        document.getElementById('maxBox').value = "";
        document.getElementById('minBox').value = "";
    }
}
