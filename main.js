var demo = new Vue({

	el: "#main",

	data: {

		layout: 'grid',

		results: []

	},

	mounted: function() {

			var self = this;
			var url = "http://thecatapi.com/api/images/get?format=xml&results_per_page=6";

			axios.get(url)
				.then(function(response) {

					var parser = new DOMParser(); 
					var data = parser.parseFromString(response.data,"text/xml");

					// console.log(data);

					Array.from(data.getElementsByTagName('url'))
					.forEach(function(image_url, index) {
						// console.log("index is " + index);
						// console.log(image_url.innerHTML);
						self.results.push(image_url.innerHTML);
					});

				});

	}

});