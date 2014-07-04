var model=Backbone.Model.extend({		//model for saving the data
	
	defaults:
	{

		BookName:"BooK1",	//Defaults values
		Cost:22,
		Domain:"IT",
		Pages:100,
		Author:"Naveen",
		Rating:5

	},
	url:"insert.php",		//Php file which save the posted the data
	initialize:function()	//which calls when object is  created for the model
	{
		//alert("Hello");
	}

});

var modelfect=Backbone.Model.extend({		//model for fetching the data
	
	defaults:
	{

	},
	url:"select.php",		//Php file which return the JOSN response
	initialize:function()
	{
		//alert("Hello");
	}

});

