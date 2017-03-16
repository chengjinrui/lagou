for (var i = 0; i < 16; i++) {
	
	$(`<div class="swiper-slide">
	<figure>
		<img src="images/Cgo8PFTUWBuATYJPAAB5_BD2tmk195.jpg"/>
		<figcaption>打造移动与互联网的休闲竞技平台</figcaption>
	 </figure>
	 <span>03/13</span>
   </div>`).appendTo($('.it_content .swiper-container .swiper-wrapper'));
   
   $(`<section>
						<figure class="clearfix">
							<a href="###"><img src="images/Cgp3O1d-H--AA92nAABg5qjREFU551.png" alt="" /></a>
							<figcaption>
								<h3><a href="###">火辣健身</a></h3>
								<p><a href="###"><span>153</span>条面试评价</a></p>
								<p><a href="###"><span>15</span>个在招职位</a></p>
								<p><a href="###"><span>98%</span>简历处理率</a></p>
							</figcaption>
						</figure>
						<p>健身行业风口公司，万亿级市场，12个月融资超4轮，黄晓明参投</p>
						<div class="company_state">
							<span>移动互联网,文化娱乐</span>
							<span>成长型(B轮)</span>
							<span>北京</span>
						</div>
					</section>`).appendTo($('.content .content_left .company_list'))
}
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 5,
	spaceBetween: 50,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
});



