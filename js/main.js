jQuery(($) => {
	$('[data-toggle="tooltip"]').tooltip();

	$('[data-toggle="datepicker"]').datepicker({
		dateFormat: 'dd.mm.yy'
	});

	$('[type="checkbox"]').checkboxradio();

	var spin = $('#spinner').spinner();
	$('#disable').on('click', () => {
		if (spin.spinner('option', 'disabled')) spin.spinner('enable');
		else spin.spinner('disable');
	});
	$('#destroy').on('click', () => {
		if (spin.spinner('instance')) spin.spinner('destroy');
		else spin.spinner();
	});
	$('#getvalue').on('click', () => {
		alert(spin.spinner('value'));
	});
	$('#setvalue').on('click', () => {
		spin.spinner('value', 5);
	});
	$('.ui-btn').button();

	$('#draggable').draggable();
	$('#droppable').droppable({
		drop: function (event, ui) {
			$(this).addClass('ui-state-highlight');
		}
	});
	let dragBorder = $('#draggable').css('border-color');
	$('#draggable').on({
		mousedown: (e) => {
			$(e.target).css('border', `3px solid #cba`);
		},
		mouseup: (e) => {
			$(e.target).css('border', dragBorder);
		}
	});

	$("#sortable").sortable();
	$("#sortable").disableSelection();

	$('[data-fancybox]').fancybox({ loop: true });

	$('#main-carousel').owlCarousel({
		loop: true,
		dots: true,
		nav: true,
		items: 1,
		margin: 2,
		lazyLoadEager: 2,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: { items: 1, autoplay: false },
			576: { items: 1, stagePadding: 50 },
			768: { stagePadding: 100 }
		}
	});
	$('#modal-carousel').owlCarousel({
		loop: true,
		dots: true,
		items: 1
	});
});