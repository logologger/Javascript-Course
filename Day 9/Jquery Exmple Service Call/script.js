function updateData(){
	$.ajax({
		url:"https://jsonplaceholder.typicode.com/posts/1",
		success:function(data){

			$("#data").html(data.body);

		},
		error:function(){
			//we will take this later

		}


	})
}

// Java ------API - -----MySQL



// JQuery ----------Weather API--------Current Weather