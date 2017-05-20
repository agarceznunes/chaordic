$( document ).ready(function() {
	(function () {
		var url = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'	
		handleData = function (data) {
			var visited = data.data.reference.item;
			var image = visited.imageName;
			image = image.replace("//", "http://");
			var link = visited.detailUrl;
			link = link.replace("//", "http://");
			$('.visited').append('<a target="_blank" href="'+link+'">'+
									'<div class="cell">'+
										'<img src='+image+'>'+
										'<h4 class="title">'+((visited.name !== null) ? visited.name : '')+'</h4>'+
										'<p class="price">'+((visited.price !== null) ? 'Por: '+visited.price : '')+'</p>'+
										'<p class="payment">'+((visited.productInfo.paymentConditions !== null) ? visited.productInfo.paymentConditions : '')+'</p>'+
									'</div>'+
								'</a>');								
				$(data.data.recommendation).each(function(i,interest) {
					var image = interest.imageName;
					image = image.replace("//", "http://");
					var link = interest.detailUrl;
					link = link.replace("//", "http://");
						$('.interest').append('<a target="_blank" href="'+link+'">'+
												'<div class="cell">'+
													'<img src='+image+'>'+
													'<h4 class="title">'+((interest.name !== null) ? interest.name : '')+'</h4>'+
													'<p class="price">'+((interest.price !== null) ? 'Por: '+interest.price : '')+'</p>'+
													'<p class="payment">'+((interest.productInfo.paymentConditions !== null) ? interest.productInfo.paymentConditions : '')+'</p>'+
												'</div>'+
											'</a>');
						})	           
				},
		X = handleData;
		$.ajax({
			url: url,
	                dataType: 'jsonp',
		});
	})();
});