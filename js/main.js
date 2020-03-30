$(document).ready(function() {

    $(".fa-bars ").click(function() {
        $(".meun").css({ right: 0 + "px" });
        $(".side").css({ right: 0 + "px" });

    })
    $(".fa-times  ").click(function() {
        $(".meun").css({ right: -400 + "px" });
        $(".side").css({ right: -400 + "px" });

    })
    let lestSchoolOpen = $("#school-list").css("display");
    $(".school").click(function() {
        if (lestSchoolOpen == "none") {
            $("#school-list").show();
            lestSchoolOpen = "block";
            $("#arrow-bottom-school").hide();
            $("#arrow-up-school").show();
        } else if (lestSchoolOpen == "block") {
            $("#school-list").hide();
            lestSchoolOpen = "none";
            $("#arrow-bottom-school").show();
            $("#arrow-up-school").hide();
        }
    })
    $(document).mouseup(function(e) {
        var container = $(".school");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $("#school-list").hide();
            lestSchoolOpen = "none";
            $("#arrow-bottom-school").show();
            $("#arrow-up-school").hide();
        }
    });


    let lestSetting = $("#seeting-list").css("display");
    $("#setting").click(function() {
        if (lestSetting == "none") {
            $("#seeting-list").show();
            lestSetting = "block";
            $("#arrow-bottom-setting").hide();
            $("#arrow-up-setting").show();
        } else if (lestSetting == "block") {
            $("#seeting-list").hide();
            lestSetting = "none";
            $("#arrow-bottom-setting").show();
            $("#arrow-up-setting").hide();
        }
    })


    $(document).mouseup(function(e) {
        var container = $("#seeting");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $("#seeting-list").hide();
            lestSetting = "none";
            $("#arrow-bottom-setting").show();
            $("#arrow-up-setting").hide();
        }
    });
    $('#open-send-message').click(function() {
        $('#popup-send-message').css({ display: 'flex' });
    });
    $(document).mouseup(function(e) {
        const container = $('.box-send-message');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-send-message').hide();
        }
    });

    $('#cancel-message , #send-message').click(function() {
        $('#popup-send-message').fadeOut(1000);
    });
    /*** */
    $('#open-send-file').click(function() {
        $('#popup-send-file').css({ display: 'flex' });
    });
    $(document).mouseup(function(e) {
        const container = $('.box-send-file');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-send-file').hide();
        }
    });

    $('#cancel-file , #send-file').click(function() {
        $('#popup-send-file').fadeOut(1000);
    });
    /*** */
    $('#delete-school-details').click(function() {
        $('#delete-schol-popup').css({ display: 'flex' });
    });
    $(document).mouseup(function(e) {
        const container = $('.box-delete-school');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#delete-schol-popup').hide();
        }
    });

    $('#cancel-delete , #send-delete').click(function() {
        $('#delete-schol-popup').fadeOut(1000);
    });
    /** */
    $('#bug-app').click(function() {
        $('#popup-bug').css({ display: 'flex' });
    });
    $(document).mouseup(function(e) {
        const container = $('.box-app-bug');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-bug').hide();
        }
    });

    $('#none-all').click(function() {
        $('#popup-bug').fadeOut(1000);
    });
    /**/
    //data-user


    $('#data-user').click(function() {
        $('#popup-user-data').css({ display: 'flex' });
    });
    $(document).mouseup(function(e) {
        const container = $('.box-user-data');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-user-data').hide();
        }
    });

    $('#delete-data , #cansel-data').click(function() {
        $('#popup-user-data').fadeOut(1000);
    });
    /** */
    $(".active-button").click(function() {
        $("#popup-active-notes").css({ display: 'flex' });
    })
    $(document).mouseup(function(e) {
        const container = $('.box-edit-notes');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-active-notes').hide();
        }
    });
    $('.cansel-edit , .delete-edit').click(function() {
        $('#popup-active-notes').fadeOut(1000);
    });
    /** */
    $(".edit-notes").click(function() {
        $("#popup-edit-notes").css({ display: 'flex' });
    })
    $(document).mouseup(function(e) {
        const container = $('.box-edit-notes');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-edit-notes').hide();
        }
    });
    $('.cansel-edit , .delete-edit , .sure-edit ').click(function() {
        $('#popup-edit-notes').fadeOut(1000);
    });
    /** */

    $("#poup-edit-pass .toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $("#poup-edit-pass  #password-sure , #poup-edit-pass #password-field ").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


    /** */
    $("#edit-pass-card").click(function() {
        $("#poup-edit-pass").css({ display: 'flex' });

    })
    $(document).mouseup(function(e) {
        const container = $('.edit-pass-box');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#poup-edit-pass').hide();
        }
    });
    $('.editPas , .cancel-editPas ').click(function() {
        $('#poup-edit-pass').fadeOut(1000);
    });
    /** */
    $("#edit-school-card").click(function() {
        $("#popup-edit-school-data").css({ display: 'flex' });

    })

    $(document).mouseup(function(e) {
        const container = $('.popup-edit-school-data');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-edit-school-data').hide();
        }
    });

    $(document).mouseup(function(e) {
        const container = $('.edit-pass-box-two');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#poup-edit-pass-two').hide();
        }
    });

    $('.save-edit-school-data , .cancel-edit-school-data ').click(function() {
        $('#popup-edit-school-data').fadeOut(1000);
    });
    /** */
    /** */
    //
    $("#edit-pass-card-two").click(function() {
        $("#poup-edit-pass-two").css({ display: 'flex' });
    })

    $('.cancel-editPas-two, .editPas-two ').click(function() {
        $('#poup-edit-pass-two').fadeOut(1000);
    });
    //

    $("#poup-edit-pass-two  .toggle-password-two, #poup-edit-pass-two .toggle-password-two").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    /*** */
    /*** */
    $("#edit-Subscription-card").click(function() {
        $("#poup-edit-Subscription").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-Subscription');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#poup-edit-Subscription').hide();
        }
    });

    $('.edit-Subscription, .cancel-Subscription ').click(function() {
        $('#poup-edit-Subscription').fadeOut(1000);
    });
    /*** */
    /*** */
    $("#edit-manger-card").click(function() {
        $("#edit-data-manger").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.edit-data-manger');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#edit-data-manger').hide();
        }
    });

    $('.cancel-manger, .edit-manger ').click(function() {
        $('#edit-data-manger').fadeOut(1000);
    });
    /**/
    /**/

    $("#edit-code-card").click(function() {
        $("#edit-code").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.edit-code');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#edit-code').hide();
        }
    });

    $('.cancel-code, .edit-code-button ').click(function() {
        $('#edit-code').fadeOut(1000);
    });
    /**/
    /**/

    $("#edit-teacher-code").click(function() {
        $("#send-code-teacher").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.send-code-teacher');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#send-code-teacher').hide();
        }
    });

    $('.cancel-code-send , .code-send-button').click(function() {
        $('#send-code-teacher').fadeOut(1000);
    });
    /*** */
    /*** */
    $(".send-code-student-all").click(function() {
        $("#popup-send-code-student").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.send-code-teacher');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-send-code-student').hide();
        }
    });

    $('.cancel-student-send , .code-send-button').click(function() {
        $('#popup-send-code-student').fadeOut(1000);
    });
    /*** */
    /*** */
    $(".code-teacher-send-all").click(function() {
        $("#popup-send-code-teacher").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.popup-send-code-teacher');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-send-code-teacher').hide();
        }
    });

    $('.code-send-teacher , .cancel-teacher-send').click(function() {
        $('#popup-send-code-student').fadeOut(1000);
    });
    /*** */
    /*** */
    $(".data-message-all").click(function() {
        $("#popup-update-message").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.popup-update-message');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-update-message').hide();
        }
    });

    $('.update-message-cancel , .send-update-message').click(function() {
        $('#popup-update-message').fadeOut(1000);
    });

    /*** */
    /*** */
    $(".table-trash").click(function() {
        $("#delete-schol-message").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-delete');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#delete-schol-message').hide();
        }
    });

    $('#delete-school , #cancel-delete-school').click(function() {
        $('#delete-schol-message').fadeOut(1000);
    });
    /*** */
    /*** */
    $(".add-school").click(function() {
        $("#popup-add-new-school").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.popup-add-new-school');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-add-new-school').hide();
        }
    });

    $('.cancel-add-school-new, .edit-add-school-new').click(function() {
        $('#popup-add-new-school').fadeOut(1000);
    });
    /*** */
    /*** */
    $(".table-edit").click(function() {
        $("#popup-edit-new-school").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.popup-edit-new-school');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-edit-new-school').hide();
        }
    });

    $('.cancel-new-school, .edit-new-school').click(function() {
        $('#popup-edit-new-school').fadeOut(1000);
    });
    /*** */
    /*** */


    $(".eye-table").click(function() {
        $("#data-schol-now").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.data-schol-now');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#data-schol-now').hide();
        }
    });

    $('.ok-none').click(function() {
        $('#data-schol-now').fadeOut(1000);
    });
    /*** */
    /*** */
    $(".table-edit-admin ").click(function() {
        $("#edit-admin-name").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-edit-admin-name');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#edit-admin-name').hide();
        }
    });

    $('#cancel-edit-admin , #edit-admin').click(function() {
        $('#edit-admin-name').fadeOut(1000);
    });
    /*** */
    /*** */
    $("#add-new-admin").click(function() {
        $("#new-admin-name").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-add-admin-name');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#new-admin-name').hide();
        }
    });

    $('#add-admin , #cancel-edit-admin').click(function() {
        $('#new-admin-name').fadeOut(1000);
    });
    /*** */
    /*** */
    $(".remove-license").click(function() {
        $("#delete-license-message").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-delete');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#delete-license-message').hide();
        }
    });

    $('#delete-license , #cancel-edit-license').click(function() {
        $('#delete-license-message').fadeOut(1000);
    });
    /*** */
    /*** */

    $(".table-edit-license").click(function() {
        $("#edit-license-name").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-edit-license-name');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#edit-license-name').hide();
        }
    });

    $('#cancel-edit-license , #edit-license').click(function() {
        $('#edit-license-name').fadeOut(1000);
    });
    /*** */
    /*** */
    $("#add-new-license").click(function() {
        $("#new-license-name").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-add-license-name');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#new-license-name').hide();
        }
    });

    $('#cancel-add-license , #add-license').click(function() {
        $('#new-license-name').fadeOut(1000);
    });
    /*** */
    /*** */
    $("#add-price-license").click(function() {
        $("#new-license-price").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-new-add-license-price');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#new-license-price').hide();
        }
    });

    $('#add-new-price-license , #cancel-add-price-license').click(function() {
        $('#edit-license-price').fadeOut(1000);
    });
    /*** */
    $(".edit-license-price").click(function() {
        $("#edit-license-price").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.update-price-license');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#edit-license-price').hide();
        }
    });

    $('#update-price-license , #cancel-update-price-license').click(function() {
        $('#edit-license-price').fadeOut(1000);
    });

    /*** */
    $(".remove-Subscription").click(function() {
        $("#delete-price-Subscription").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-delete-Subscription');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#delete-price-Subscription').hide();
        }
    });

    $('#cancel-Subscription , #delete-Subscription').click(function() {
        $('#delete-price-Subscription').fadeOut(1000);
    });
    /*** */
    $("#Subscription-add").click(function() {
        $("#new-Subscription").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-new-Subscription ');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#new-Subscription').hide();
        }
    });

    $('#cancel-add-price-Subscription , #add-new-price-Subscription').click(function() {
        $('#new-Subscription').fadeOut(1000);
    });
    /*** */
    $(".update-Subscription-price").click(function() {
        $("#edit-Subscription-price").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.edit-Subscription-price');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#edit-Subscription-price').hide();
        }
    });

    $('#cancel-edit-price-Subscription , #edit-price-Subscription').click(function() {
        $('#delete-service').fadeOut(1000);
    });
    /*** */
    $(".remove-service").click(function() {
        $("#delete-service").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-delete ');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#delete-service').hide();
        }
    });

    $('#cancel-service , #delete-all-service').click(function() {
        $('#delete-service').fadeOut(1000);
    });
    /*** */
    $("#add-service").click(function() {
        $("#popup-add-service").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-add-service');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-add-service').hide();
        }
    });

    $('#cancel-add-service , #add-service-new').click(function() {
        $('#popup-add-service').fadeOut(1000);
    });
    /*** */
    $(".edit-service").click(function() {
        $("#popup-edit-service").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-edit-service');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#popup-edit-service').hide();
        }
    });

    $('#service-edit , #cancel-edit-service').click(function() {
        $('#popup-edit-service').fadeOut(1000);
    });
    /*** */
    $(".delete-filed").click(function() {
        $("#delete-filed-service").css({ display: 'flex' });
    });

    $(document).mouseup(function(e) {
        const container = $('.box-delete-filed');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('#delete-filed-service').hide();
        }
    });

    $('#cancel-delete-filed , #delete-filed').click(function() {
        $('#delete-filed-service').fadeOut(1000);
    });
})

//
//
//

//

//
//
//
//

//

//

//
//
//