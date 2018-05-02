$(function() {

	function getQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return decodeURI(r[2]);
	    return null;
	}

	var currPage = getQueryString('pageNum') || 1,
		pageSize = getQueryString('pageSize') || 10

	// 获取文章
	$.ajax({
		url: '/api/article/get',
		data: {
			pageNum: currPage,
			pageSize: pageSize,
		},
		success: function (data) {
			if(data.code === 200 && data.data) {
				renderArticleList(data.data)
			}
		}
	})

	// 渲染文章列表
	function renderArticleList(d) {
		var $list = $('.article-list'),
			$page = $('.article-page')
		var list = d.results,
			totalPage = d.totalPage

		var htmlTable = '',
			htmlPage = ''

		if(!list.length) {
			$list.html('没有数据！')
			return
		}

		for (var i = 0; i < list.length; i++) {
			var item = list[i]
			htmlTable += '<tr>'+
					'<td>'+item.id+'</td>'+
					'<td>'+item.title+'</td>'+
					'<td></td>'+
				'</tr>'
		}
		$list.html(htmlTable)

		for (var i = 0; i < totalPage; i++) {
			htmlPage += '<li data-page="'+(i+1)+'"><a href="?pageNum='+(i+1)+'">'+(i+1)+'</a></li>'
		}
		$page.find('li[data-page="'+currPage+'"]').addClass('active')
		$page.html(htmlPage)
	}
})