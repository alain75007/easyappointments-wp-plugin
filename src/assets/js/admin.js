/* ----------------------------------------------------------------------------
 * Easy!Appointments - WordPress Plugin
 *
 * @license GPLv3
 * @copyright A.Tselegidis (C) 2016
 * @link http://easyappointments.org
 * @since v1.0.0
 * ---------------------------------------------------------------------------- */

/**
 * Easy!Appointments WP Page
 *
 * Defines the JS functionality of the admin settings page.
 */
jQuery(function($) {

    'use strict';

    /**
     * Execute the install operation with the provided data.
     */
    function install() {
        var data = {
            action: 'install',
            path: $('#path').val(),
            url: $('#url').val()
        };

        $.ajax({
            url: window.ajaxurl,
            data: data,
            method: 'POST',
            dataType: 'json'
        })
            .done(function(response) {
                if (response.exception) {
                    return EAWP.Plugin.handleAjaxException(response);
                }

                $('.eawp').prepend(
                    '<div class="updated">'
                        + '<span class="dashicons dashicons-yes"></span>'
                        + EAWP.Lang.InstallationSuccessMessage
                    + '</div>'
                );
            });
    }

    /**
     * Execute the link operation with the provided data.
     */
    function link() {
        var data = {
            action: 'link',
            path: $('#path').val(),
            url: $('#url').val()
        };

        $.ajax({
            url: window.ajaxurl,
            data: data,
            method: 'POST',
            dataType: 'json'
        })
            .done(function(response) {
                if (response.exception) {
                    return EAWP.Plugin.handleAjaxException(response);
                }

                $('.eawp').prepend(
                    '<div class="updated">'
                        + '<span class="dashicons dashicons-yes"></span>'
                        + EAWP.Lang.LinkSuccessMessage
                    + '</div>'
                );
            });
    }

    /**
     * Bind page event handlers.
     */
    function events() {
        $('#install').on('click', function(event) {
            install();
        });

        $('#link').on('click', function(event) {
            link();
        });
    }

    // ------------------------------------------------------------------------
    //  INITIALIZE PAGE
    // ------------------------------------------------------------------------

    events();

});
