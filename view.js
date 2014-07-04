var view =Backbone.View.extend({
	el:"body",
	events:
	{
			'click #Register':'addBook'  //	triggers when register is clicked or submitted

	},
	template:Handlebars.compile($("#book").html()),	//template
	addBook:function()
	{
		//alert("Im clicked");
		//alert(this.template);
		var BookName=$("#BookName").val();		//Geting data from the user using jquery
		var Cost=$("#Cost").val();
		var Pages=$("#Pages").val();
		var Domain=$("#Domain").val();
		var Author=$("#Author").val();
		var Rating=$("#Rating").val();
		var modelobj=new model();				//Created object for the model to save the data to server
		//alert(modelobj.toJSON());
		modelobj.set("BookName",BookName);
		modelobj.set("Cost",Cost);
		modelobj.set("Pages",Pages);
		modelobj.set("Domain",Domain);
		modelobj.set("Author",Author);
		modelobj.set("Rating",Rating);
		modelobj.save();						//Saving the data to the server
		
		var modelobjfect=new modelfect();		//Creating object for the model to fetch the data from the server

		modelobjfect.fetch({success: function(data){},async:false}); //fetching the data from the server
		var dataarray=[];
		dataarray=modelobjfect;
		this.$el.find("#bookdata").append(this.template({book:modelobjfect}));//Passing the data to the template
		$("#BookName").val()="";
		$("#Cost").val()="";			//Clearing the fields
		$("#Pages").val()="";
		$("#Domain").val()="";
		$("#Author").val()="";
		$("#Rating").val()="";
		}
	

});

new view();
