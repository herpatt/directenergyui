var gotoPage = function(pagename){
	
	var type = ".html";
	
    var page = '';
    
    var isRedirect = true;

    switch(pagename) {
        case 'home':
        	page = 'directenergy-dashboard';
            break;
        case 'electricity':
        	page = 'directenergy-dashboard-electricity';
            break;
        case 'add':
        	//page = 'directenergy-dashboard-addnew';
        	$('#myModal').modal('toggle');
        	isRedirect = false;
            break;
        case 'debt':
        	page = 'directenergy-dashboard-viewdebt';
            break;
        case 'enroll':
        	page = 'directenergy-dashboard-enroll';
            break;     
        case 'checkout':
        	page = 'directenergy-dashboard-checkout';
            break;                 
    }
    
    if( isRedirect ){
    	window.location.href = "./"+page + type ; 	
    }
    
};

var checkoutToggle = function(obj){
	
	var classStyle = obj.className;
	
	if( classStyle == "btn-u btn-u-green" ){
		obj.className = "btn-u btn-u-red";
		obj.innerHTML = "Remove CheckedOut";
	}else{
		obj.className = "btn-u btn-u-green";
		obj.innerHTML = "Proceed to CheckOut";		
	}
	
	
};


var deleteRow = function(obj){
	$(obj.parentNode.parentNode).remove();
};

