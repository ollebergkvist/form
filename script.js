$(document).ready(function () {
    $(":input, a").attr("tabindex", "-1");

    /******Step 1 *******************/
    $("#name-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#name-step").click(function (e) {
        e.preventDefault();

        if ($("#name-input").val().length != 0) {
            $("#name-alert").hide();
            $(".w-round div:nth-child(2)").trigger("tap");
        } else {
            $("#name-alert").show(500);
        }
    });

    /******Step 2 *******************/
    $("#email-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#email-step").click(function (e) {
        e.preventDefault();

        if ($("#email-input").val().length != 0) {
            $("#email-alert").hide();
            $(".w-round div:nth-child(3)").trigger("tap");
        } else {
            $("#email-alert").show(500);
        }
    });

    $("#email-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(1)").trigger("tap");
    });

    /******Step 3 *******************/
    $("#company-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#company-step").click(function (e) {
        e.preventDefault();

        if ($("#company-input").val().length != 0) {
            $("#company-alert").hide();
            $(".w-round div:nth-child(4)").trigger("tap");
        } else {
            $("#company-alert").show(500);
        }
    });

    $("#company-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(2)").trigger("tap");
    });

    /******Step 4 *******************/
    $("input[name='service']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#service-step").click(function (e) {
        e.preventDefault();

        if (!$("input[name='service']").is(":checked")) {
            $("#service-alert").show(500);
        } else {
            $("#service-alert").hide();
            $(".w-round div:nth-child(5)").trigger("tap");
        }
    });

    $("#service-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(3)").trigger("tap");
    });

    /******Step 5 *******************/
    $("#type-of-product-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide5-step").click(function (e) {
        e.preventDefault();

        if ($("#type-of-product-input").val().length != 0) {
            $("#type-of-product-alert").hide();
            $(".w-round div:nth-child(6)").trigger("tap");
        } else {
            $("#type-of-product-alert").show(500);
        }
    });

    $("#slide5-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(4)").trigger("tap");
    });

    /******Step 6 *******************/
    $("#nr-of-products-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide6-step").click(function (e) {
        e.preventDefault();

        if ($("#nr-of-products-input").val().length != 0) {
            $("#nr-of-products-alert").hide();
            $(".w-round div:nth-child(7)").trigger("tap");
        } else {
            $("#nr-of-products-alert").show(500);
        }
    });

    /******Step 7 *******************/
    $("#categories-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide7-step").click(function (e) {
        e.preventDefault();

        if ($("#categories-input").val().length != 0) {
            $("#categories-alert").hide();
            $(".w-round div:nth-child(8)").trigger("tap");
        } else {
            $("#categories-alert").show(500);
        }
    });

    $("#slide7-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(6)").trigger("tap");
    });

    /******Step 8 *******************/
    $("#nr-of-categories-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide8-step").click(function (e) {
        e.preventDefault();

        if ($("#nr-of-categories-input").val().length != 0) {
            $("#nr-of-categories-alert").hide();
            $(".w-round div:nth-child(9)").trigger("tap");
        } else {
            $("#nr-of-categories-alert").show(500);
        }
    });

    $("#slide8-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(7)").trigger("tap");
    });

    /******Step 9 *******************/
    $("#attribute-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide9-step").click(function (e) {
        e.preventDefault();

        if ($("#attribute-input").val().length != 0) {
            $("#attribute-alert").hide();
            $(".w-round div:nth-child(10)").trigger("tap");
        } else {
            $("#attribute-alert").show(500);
        }
    });

    $("#slide9-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(8)").trigger("tap");
    });

    /******Step 10 *******************/
    $("#stock-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide10-step").click(function (e) {
        e.preventDefault();

        if ($("#stock-input").val().length != 0) {
            $("#stock-alert").hide();
            $(".w-round div:nth-child(11)").trigger("tap");
        } else {
            $("#stock-alert").show(500);
        }
    });

    $("#slide10-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(9)").trigger("tap");
    });

    /******Step 11 *******************/
    $("#product-photo-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide11-step").click(function (e) {
        e.preventDefault();

        if ($("#product-photo-input").val().length != 0) {
            $("#product-photo-alert").hide();
            $(".w-round div:nth-child(12)").trigger("tap");
        } else {
            $("#product-photo-alert").show(500);
        }
    });

    $("#slide11-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(10)").trigger("tap");
    });

    /******Step 12 *******************/
    $("#delivery-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide12-step").click(function (e) {
        e.preventDefault();

        if ($("#delivery-input").val().length != 0) {
            $("#delivery-alert").hide();
            $(".w-round div:nth-child(13)").trigger("tap");
        } else {
            $("#delivery-alert").show(500);
        }
    });

    $("#slide12-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(11)").trigger("tap");
    });

    /******Step 13 *******************/
    $("#delivery-cost-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide13-step").click(function (e) {
        e.preventDefault();

        if ($("#delivery-cost-input").val().length != 0) {
            $("#delivery-cost-alert").hide();
            $(".w-round div:nth-child(14)").trigger("tap");
        } else {
            $("#delivery-cost-alert").show(500);
        }
    });

    $("#slide13-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(12)").trigger("tap");
    });

    /******Step 14 *******************/
    $("#delivery-method-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide14-step").click(function (e) {
        e.preventDefault();

        if ($("#delivery-method-input").val().length != 0) {
            $("#delivery-method-alert").hide();
            $(".w-round div:nth-child(15)").trigger("tap");
        } else {
            $("#delivery-method-alert").show(500);
        }
    });

    $("#slide14-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(13)").trigger("tap");
    });

    /******Step 15 *******************/
    $("#sku-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide15-step").click(function (e) {
        e.preventDefault();

        if ($("#sku-input").val().length != 0) {
            $("#sku-alert").hide();
            $(".w-round div:nth-child(16)").trigger("tap");
        } else {
            $("#sku-alert").show(500);
        }
    });

    $("#slide15-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(14)").trigger("tap");
    });

    /******Step 16 *******************/
    $("#payment-method-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide16-step").click(function (e) {
        e.preventDefault();

        if ($("#payment-method-input").val().length != 0) {
            $("#payment-method-alert").hide();
            $(".w-round div:nth-child(17)").trigger("tap");
        } else {
            $("#payment-method-alert").show(500);
        }
    });

    $("#slide16-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(15)").trigger("tap");
    });

    /******Step 17 *******************/
    $("#tax-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide17-step").click(function (e) {
        e.preventDefault();

        if ($("#tax-input").val().length != 0) {
            $("#tax-alert").hide();
            $(".w-round div:nth-child(18)").trigger("tap");
        } else {
            $("#tax-alert").show(500);
        }
    });

    $("#slide17-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(16)").trigger("tap");
    });

    /******Step 18 *******************/
    $("#special-customer-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide18-step").click(function (e) {
        e.preventDefault();

        if ($("#special-customer-input").val().length != 0) {
            $("#special-customer-alert").hide();
            $(".w-round div:nth-child(19)").trigger("tap");
        } else {
            $("#special-customer-alert").show(500);
        }
    });

    $("#slide18-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(17)").trigger("tap");
    });

    /******Step 19 *******************/
    $("#sold-out-product-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide19-step").click(function (e) {
        e.preventDefault();

        if ($("#sold-out-product-input").val().length != 0) {
            $("#sold-out-product-alert").hide();
            $(".w-round div:nth-child(20)").trigger("tap");
        } else {
            $("#sold-out-product-alert").show(500);
        }
    });

    $("#slide19-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(18)").trigger("tap");
    });

    /******Step 20 *******************/
    $("#client-notification-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide20-step").click(function (e) {
        e.preventDefault();

        if ($("#client-notification-input").val().length != 0) {
            $("#client-notification-alert").hide();
            $(".w-round div:nth-child(21)").trigger("tap");
        } else {
            $("#client-notification-alert").show(500);
        }
    });

    $("#slide20-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(19)").trigger("tap");
    });

    /******Step 21 *******************/
    $("#customer-review-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide21-step").click(function (e) {
        e.preventDefault();

        if ($("#customer-review-input").val().length != 0) {
            $("#customer-review-alert").hide();
            $(".w-round div:nth-child(22)").trigger("tap");
        } else {
            $("#customer-review-alert").show(500);
        }
    });

    $("#slide21-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(20)").trigger("tap");
    });

    /******Step 22 *******************/
    $("#language-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide22-step").click(function (e) {
        e.preventDefault();

        if ($("#language-input").val().length != 0) {
            $("#language-alert").hide();
            $(".w-round div:nth-child(23)").trigger("tap");
        } else {
            $("#language-alert").show(500);
        }
    });

    $("#slide21-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(21)").trigger("tap");
    });

    /******Step 23 *******************/
    $("#social-share-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide23-step").click(function (e) {
        e.preventDefault();

        if ($("#social-share-input").val().length != 0) {
            $("#social-share-alert").hide();
            $(".w-round div:nth-child(24)").trigger("tap");
        } else {
            $("#social-share-alert").show(500);
        }
    });

    $("#slide23-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(22)").trigger("tap");
    });

    /******Step 24 *******************/
    $("#wholesale-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide24-step").click(function (e) {
        e.preventDefault();

        if ($("#wholesale-input").val().length != 0) {
            $("#wholesale-alert").hide();
            $(".w-round div:nth-child(25)").trigger("tap");
        } else {
            $("#wholesale-alert").show(500);
        }
    });

    $("#slide24-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(23)").trigger("tap");
    });

    /******Step 25 *******************/
    $("#discount-code-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide25-step").click(function (e) {
        e.preventDefault();

        if ($("#discount-code-input").val().length != 0) {
            $("#discount-code-alert").hide();
            $(".w-round div:nth-child(26)").trigger("tap");
        } else {
            $("#discount-code-alert").show(500);
        }
    });

    $("#slide25-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(25)").trigger("tap");
    });

    /******Step 26 *******************/
    $("#annual-sales-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide26-step").click(function (e) {
        e.preventDefault();

        if ($("#annual-sales-input").val().length != 0) {
            $("#annual-sales-alert").hide();
            $(".w-round div:nth-child(27)").trigger("tap");
        } else {
            $("#annual-sales-alert").show(500);
        }
    });

    $("#slide26-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(26)").trigger("tap");
    });

    /******Step 27 *******************/
    $("#description-input").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide27-step").click(function (e) {
        e.preventDefault();

        if ($("#description-input").val().length != 0) {
            $("#description-alert").hide();
            $(".w-round div:nth-child(28)").trigger("tap");
        } else {
            $("#description-alert").show(500);
        }
    });

    $("#slide27-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(27)").trigger("tap");
    });

    /******Step 28 *******************/
    $("input[name='Budget']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $("#slide28-step").click(function (e) {
        e.preventDefault();

        if (!$("input[name='Budget']").is(":checked")) {
            $("#budget-alert").show(500);
        } else {
            $("#budget-alert").hide();
            $(".w-round div:nth-child(29)").trigger("tap");
        }
    });

    $("#slide28-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(27)").trigger("tap");
    });

    /******Step 29 *******************/
    $("#slide29-prev").click(function (e) {
        e.preventDefault();
        $(".w-round div:nth-child(28)").trigger("tap");
    });

    /*$('#submit-step').click(function(e) {
			e.preventDefault();

      if($('#details-input').val().length !=0){
        $('#details-alert').hide();
       }

      else
        {
          $('#details-alert').show();
        }
		});*/
});
