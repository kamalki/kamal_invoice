$(document).ready(function (){
	var f =1;

	$("#invoice_product_ids").on('change',function(){
        var id=$('#invoice_product_ids').val();
        var value=$('#test')
        $.ajax({
                    type: "GET",
                    url: "/render_read/"+id,
                    dataType: "html",
                    success: function (data) {
                            // alert(data);
                            dum = data;
                           // $('.item-row:last').html(data);
                            //$('.item-row:last').after('<tr class="item-row"></tr>');
                    }
            });
    });


    $('#addrow').click(function(){
        $('.item-row:last').html(dum);
        $('.item-row:last').after('<tr class="item-row"></tr>');
        $('.rate:last').after(' <input class="qty" type="text" placeholder="Number of Product"> <input class="price" type="text" placeholder="Amount"> <button type="button" <a class="btn btn-danger btn-xs delete" href="javascript:;"></a>Remove</button>');
        $('#invoice_product_ids :selected').remove();
        f=f+1;
        bind();
    });

     bind();

    $('body').on('click', '.delete', function(){
        $(this).parents('.product-row').remove();
        update_subtotal();
    });

    $('.txtDate').datepicker({
        format: 'yyyy/mm/dd'
    });

});
    
