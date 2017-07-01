function print_me_the_server_logs(){




	//print the server logs

	console.log("\n\n\n\n====blah blah blah===\n\n\n");
}

var a=10;

module.exports.server_log=print_me_the_server_logs;
module.exports.variable=a;


module.exports={
	image_download_link:function(){

		//return the jpg file link to download the image
		console.log("--------File image link---");
	},
	give_me_student_data:function(){
		console.log("======Student Data======");
	}


}