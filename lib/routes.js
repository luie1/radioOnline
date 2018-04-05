//	3000/  a eso se refiere el template
FlowRouter.route("/",{
	//query params todos los parametros q enviamos son rescatados ahi
	// params es mas general
	action : function(params, queryParams){
		//blaze layout tecnologia para mostrar plantillas
		// primer argumento es el nombre de la plantilla que queremos mostrar
		// segundo argumento los parametros que le querremos enviar
		BlazeLayout.render("mainPage",{});
	}
});
