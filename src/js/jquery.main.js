$(document).ready(function() {

    $(".fancybox").fancybox();
    // filter catalog
    $(".sort_block .customSelectCalcSmall").change(function(){
        $(this).addClass("active");
        $(".sort_block select.customSelectCalcSmall:not(.active) option:selected").prop("selected", false).removeAttr("selected");
        $(".sort_block form").submit();
    })
    // phone
    $(".top_phone_hold .phone_num").attr("href", "tel:" + $(".top_phone_hold .phone_num").text().replace(/[^.\d]+/g, ""));
    $("address a.phone_num").attr("href", "tel:" + $("address a.phone_num").text().replace(/[^.\d]+/g, ""));
    $(".main_prod_text a.phone_num").attr("href", "tel:" + $(".main_prod_text a.phone_num").text().replace(/[^.\d]+/g, ""));
    $(".manager_blk a.phone_num").attr("href", "tel:" + $(".manager_blk a.phone_num").text().replace(/[^.\d]+/g, ""));
    $("address a.mail").attr("href", "mailto:" + $("address a.mail").text());

    $("input[name='phone']").inputmask("+7 (999) 999-99-99");

    $(".top_adr_hold .btn").click(function(event) {
        event.preventDefault();
        // $('html, body').animate({
        //     scrollTop: $(".foot_form_wrap").offset().top
        // }, 1500);
        $.fancybox($("#zayavka"));

    })

    $("a.to_top").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 1500);

    })
    $(".radio_block_text").on("click", function(event) {
        var a = $(this);
        if ($(this).parents(".radio_block_lab").find("input").is(':checked')) {
            event.preventDefault();
            $(a).parents(".radio_block_lab").find("input").attr("checked", false).removeAttr("checked");
        }
    })

    /* mob. menu */
    $("#menu_label").click(function() {
        $(this).toggleClass("open");
        $("#menu").toggleClass("open");
    });
    /* end mob. menu */

    /* to top*/
    window.onscroll = function top() {
            document.getElementById('top').style.display = (window.pageYOffset > '600' ? 'block' : 'none');
        }
        /* end to top*/

    /* block_select */
    $(".block_select").click(function() {
        $(this).toggleClass("open");
    });
    /* end block_select */

    /* big_fall_block */
    $(".big_fall_text").click(function() {
        $(this).toggleClass("open");
    });
    /* end big_fall_block */

    /* customForm */
    jQuery.customForm({
        select: {
            elements: 'select.customSelect',
            structure: '<div class="selectArea"><div class="selectIn"><div class="selectText"></div></div></div>',
            text: '.selectText',
            btn: '.selectIn',
            optStructure: '<div class="selectSub"><ul></ul></div>'
        }
    });

    jQuery.customForm({
        select: {
            elements: 'select.customSelectPage',
            structure: '<div class="selectArea"><div class="selectIn"><div class="selectText"></div></div></div>',
            text: '.selectText',
            btn: '.selectIn',
            optStructure: '<div class="selectSub selectSubPage"><ul></ul></div>'
        }
    });

    jQuery.customForm({
        select: {
            elements: 'select.customSelectCalcSmall',
            structure: '<div class="selectArea"><div class="selectIn"><div class="selectText"></div></div></div>',
            text: '.selectText',
            btn: '.selectIn',
            optStructure: '<div class="selectSub selectSubCalcSmall"><ul></ul></div>'
        }
    });

    jQuery.customForm({
        select: {
            elements: 'select.customSelectCalcLarge',
            structure: '<div class="selectArea"><div class="selectIn"><div class="selectText"></div></div></div>',
            text: '.selectText',
            btn: '.selectIn',
            optStructure: '<div class="selectSub selectSubCalcLarge"><ul></ul></div>'
        }
    });
    /* end customForm */

    /* TABS */
    $(".tabs").tabs({});
    $(".tabs2").tabs({});
    /* end TABS */

    /* slider image */
    $('.fade_img').gallery({
        listOfSlides: 'div.hold > ul > li',
        duration: 1000,
        autoRotation: 5000,
        effect: true,
        autoHeight: true,
        switcher: 'ul.dot > li'
    });

    $('.slider_img').gallery({
        listOfSlides: 'div.hold > ul > li',
        duration: 500,
        autoRotation: 5000,
        infinite: true,
        flexible: true,
        slideElement: 1,
        switcher: 'ul.dot > li'
    });

    $('.slider_img2').gallery({
        listOfSlides: 'div.hold > ul > li',
        duration: 500,
        autoRotation: 5000,
        infinite: true,
        flexible: true,
        autoHeight: true,
        slideElement: 1,
        switcher: 'ul.dot > li'
    });
    /* end slider image */

    /* Slider calc-1 */
    $(function() {
        $("#slider-range1").slider({
            range: true,
            min: parseInt($("#slider-range1").attr("data-min")),
            max: $("#slider-range1").attr("data-max"),
            values: [$("#slider-range1").attr("data-min-val"), $("#slider-range1").attr("data-max-val")],
            step: 5000,
            slide: function(event, ui) {
                $("#amount1").val(ui.values[0]);
                $("#amount2").val(ui.values[1]);
            }
        });
        $("#amount1").val($("#slider-range1").slider("values", 0));
        $("#amount2").val($("#slider-range1").slider("values", 1));

    });
    /* end Slider calc-1 */

    /* Slider calc-2 */
    $(function() {
        $("#slider-range2").slider({
            range: true,
            min: parseInt($("#slider-range2").attr("data-min")),
            max: $("#slider-range2").attr("data-max"),
            values: [$("#slider-range2").attr("data-min-val"), $("#slider-range2").attr("data-max-val")],
            step: 1,
            slide: function(event, ui) {
                $("#amount3").val(ui.values[0] + "M2");
                $("#amount4").val(ui.values[1] + "M2");
            }
        });
        $("#amount3").val($("#slider-range2").slider("values", 0) + "M2");
        $("#amount4").val($("#slider-range2").slider("values", 1) + "M2");
    });
    /* end Slider calc-2 */


    $("form.foot_form").submit(function(event) {
        event.preventDefault();
        var form = $(this).serialize();
        var url = $(this).attr("action");
        $.ajax({
                method: "POST",
                url: url,
                data: form
            })
            .done(function(msg) {
                if (msg == "ok") {
                    $.fancybox.close();
                    $.fancybox($("#send_form_ok"));
                }

            });
    })

    // fav
    $("main .fav_ico, .to_fav").click(function(event) {
        event.preventDefault();
        var f = $(this);
        $.ajax({
                method: "POST",
                url: site_dir + "ajax/favorite.php",
                data: {
                    id: $(this).attr("href"),

                }
            })
            .done(function(msg) {
                if (msg == 1) {
                    $(f).addClass("active");
                    // $.fancybox($("#popup_fav"));
                }
                if (msg == 0) {
                    $(f).removeClass("active");
                }
            });
    })


    $("main .fav_ico").each(function(e) {
        if (fav.indexOf($(this).attr("href")) != -1) {
            $(this).addClass("active");
        }
    })


});
/* end document.ready */

/**
 jQuery Custom Form min v1.2.2
 **/

;
jQuery.fn.customForm = jQuery.customForm = function(_options) {
    var _this = this;
    var methods = {
        destroy: function() {
            var elements;
            if (typeof this === 'function') {
                elements = $('select, input:radio, input:checkbox');
            } else {
                elements = this.add(this.find('select, input:radio, input:checkbox'));
            }
            elements.each(function() {
                var data = $(this).data('customForm');
                if (data) {
                    $(this).removeClass('outtaHere');
                    if (data['events']) data['events'].unbind('.customForm');
                    if (data['create']) data['create'].remove();
                    if (data['resizeElement']) data.resizeElement = false;
                    $(this).unbind('.customForm');
                }
            });
        },
        refresh: function() {
            if (typeof this === 'function') $('select, input:radio, input:checkbox').trigger('refresh');
            else this.trigger('refresh');
        }
    };
    if (typeof _options === 'object' || !_options) {
        if (typeof _this == 'function') _this = $(document);
        var options = jQuery.extend(true, {
            select: {
                elements: 'select.customSelect',
                structure: '<div class="selectArea"><a tabindex="-1" href="#" class="selectButton"><span class="center"></span><span class="right">&nbsp;</span></a><div class="disabled"></div></div>',
                text: '.center',
                btn: '.selectButton',
                optStructure: '<div class="selectOptions"><ul></ul></div>',
                maxHeight: false,
                topClass: 'position-top',
                optList: 'ul'
            },
            radio: {
                elements: 'input.customRadio',
                structure: '<div></div>',
                defaultArea: 'radioArea',
                checked: 'radioAreaChecked'
            },
            checkbox: {
                elements: 'input.customCheckbox',
                structure: '<div></div>',
                defaultArea: 'checkboxArea',
                checked: 'checkboxAreaChecked'
            },
            disabled: 'disabled',
            hoverClass: 'hover'
        }, _options);
        return _this.each(function() {
            var hold = jQuery(this);
            var reset = jQuery();
            if (this !== document) reset = hold.find('input:reset, button[type=reset]');
            initSelect(hold.find(options.select.elements), hold, reset);
            initRadio(hold.find(options.radio.elements), hold, reset);
            initCheckbox(hold.find(options.checkbox.elements), hold, reset);
        });
    } else {
        if (methods[_options]) {
            methods[_options].apply(this);
        }
    }

    function initSelect(elements, form, reset) {
        elements.not('.outtaHere').each(function() {
            var select = $(this);
            var replaced = jQuery(options.select.structure);
            var selectText = replaced.find(options.select.text);
            var selectBtn = replaced.find(options.select.btn);
            var selectDisabled = replaced.find('.' + options.disabled).hide();
            var optHolder = jQuery(options.select.optStructure);
            var optList = optHolder.find(options.select.optList);
            var html = '';
            var optTimer;
            if (select.prop('disabled')) selectDisabled.show();

            function createStructure() {
                html = '';
                select.find('option').each(function() {
                    var selOpt = jQuery(this);
                    if (selOpt.prop('selected')) selectText.html(selOpt.html());
                    html += '<li data-value="' + selOpt.val() + '" ' + (selOpt.prop('selected') ? 'class="selected"' : '') + '>' + (selOpt.prop('disabled') ? '<span>' : '<a href="#">') + selOpt.html() + (selOpt.prop('disabled') ? '</span>' : '</a>') + '</li>';
                });
                if (select.data('placeholder') !== undefined) {
                    selectText.html(select.data('placeholder'));
                    replaced.addClass('placeholder');
                }
                optList.append(html).find('a').click(function() {
                    replaced.removeClass('placeholder');
                    optList.find('li').removeClass('selected');
                    jQuery(this).parent().addClass('selected');
                    select.val(jQuery(this).parent().data('value'));
                    selectText.html(jQuery(this).html());
                    select.change();
                    replaced.removeClass(options.hoverClass);
                    optHolder.css({
                        left: -9999,
                        top: -9999
                    });
                    return false;
                });
            }
            createStructure();
            replaced.width(select.outerWidth());
            replaced.insertBefore(select);
            replaced.addClass(select.attr('class'));
            optHolder.css({
                width: select.outerWidth(),
                position: 'absolute',
                left: -9999,
                top: -9999
            });
            optHolder.addClass(select.attr('class'));
            jQuery(document.body).append(optHolder);
            select.bind('refresh', function() {
                optList.empty();
                createStructure();
            });
            replaced.hover(function() {
                if (optTimer) clearTimeout(optTimer);
            }, function() {
                optTimer = setTimeout(function() {
                    replaced.removeClass(options.hoverClass);
                    optHolder.css({
                        left: -9999,
                        top: -9999
                    });
                }, 200);
            });
            optHolder.hover(function() {
                if (optTimer) clearTimeout(optTimer);
            }, function() {
                optTimer = setTimeout(function() {
                    replaced.removeClass(options.hoverClass);
                    optHolder.css({
                        left: -9999,
                        top: -9999
                    });
                }, 200);
            });
            selectBtn.click(function() {
                if (optHolder.offset().left > 0) {
                    replaced.removeClass(options.hoverClass);
                    optHolder.css({
                        left: -9999,
                        top: -9999
                    });
                } else {
                    replaced.addClass(options.hoverClass);
                    optHolder.children('ul').css({
                        height: 'auto',
                        overflow: 'hidden'
                    });
                    select.removeClass('outtaHere');
                    optHolder.css({
                        width: select.outerWidth(),
                        top: -9999
                    });
                    select.addClass('outtaHere');
                    if (options.select.maxHeight && optHolder.children('ul').height() > options.select.maxHeight) {
                        optHolder.children('ul').css({
                            height: options.select.maxHeight,
                            overflow: 'auto'
                        });
                    }
                    if ($(document).height() > optHolder.outerHeight(true) + replaced.offset().top + replaced.outerHeight()) {
                        optHolder.removeClass(options.select.topClass).css({
                            top: replaced.offset().top + replaced.outerHeight(),
                            left: replaced.offset().left
                        });
                        replaced.removeClass(options.select.topClass);
                    } else {
                        optHolder.addClass(options.select.topClass).css({
                            top: replaced.offset().top - optHolder.outerHeight(true),
                            left: replaced.offset().left
                        });
                        replaced.addClass(options.select.topClass);
                    }
                    replaced.focus();
                }
                return false;
            });
            reset.click(function() {
                setTimeout(function() {
                    select.find('option').each(function(i) {
                        var selOpt = jQuery(this);
                        if (selOpt.val() == select.val()) {
                            selectText.html(selOpt.html());
                            optList.find('li').removeClass('selected');
                            optList.find('li').eq(i).addClass('selected');
                        }
                    });
                }, 10);
            });
            select.bind('change.customForm', function() {
                if (optHolder.is(':hidden')) {
                    select.find('option').each(function(i) {
                        var selOpt = jQuery(this);
                        if (selOpt.val() == select.val()) {
                            selectText.html(selOpt.html());
                            optList.find('li').removeClass('selected');
                            optList.find('li').eq(i).addClass('selected');
                        }
                    });
                }
            });
            select.bind('focus.customForm', function() {
                replaced.addClass('focus');
            }).bind('blur.customForm', function() {
                replaced.removeClass('focus');
            });
            select.data('customForm', {
                'resizeElement': function() {
                    select.removeClass('outtaHere');
                    replaced.width(Math.floor(select.outerWidth()));
                    select.addClass('outtaHere');
                },
                'create': replaced.add(optHolder)
            });
            $(window).bind('resize.customForm', function() {
                if (select.data('customForm')['resizeElement']) select.data('customForm').resizeElement();
            });
        }).addClass('outtaHere');
    }

    function initRadio(elements, form, reset) {
        elements.each(function() {
            var radio = $(this);
            if (!radio.hasClass('outtaHere') && radio.is(':radio')) {
                radio.data('customRadio', {
                    radio: radio,
                    name: radio.attr('name'),
                    label: $('label[for=' + radio.attr('id') + ']').length ? $('label[for=' + radio.attr('id') + ']') : radio.parents('label'),
                    replaced: jQuery(options.radio.structure, {
                        'class': radio.attr('class')
                    })
                });
                var data = radio.data('customRadio');
                if (radio.is(':disabled')) {
                    data.replaced.addClass(options.disabled);
                    if (radio.is(':checked')) data.replaced.addClass('disabledChecked');
                } else if (radio.is(':checked')) {
                    data.replaced.addClass(options.radio.checked);
                    data.label.addClass('checked');
                } else {
                    data.replaced.addClass(options.radio.defaultArea);
                    data.label.removeClass('checked');
                }
                data.replaced.click(function() {
                    if (jQuery(this).hasClass(options.radio.defaultArea)) {
                        radio.change();
                        radio.prop('checked', true);
                        changeRadio(data);
                    }
                });
                reset.click(function() {
                    setTimeout(function() {
                        if (radio.is(':checked')) data.replaced.removeClass(options.radio.defaultArea + ' ' + options.radio.checked).addClass(options.radio.checked);
                        else data.replaced.removeClass(options.radio.defaultArea + ' ' + options.radio.checked).addClass(options.radio.defaultArea);
                    }, 10);
                });
                radio.bind('refresh', function() {
                    if (radio.is(':checked')) {
                        data.replaced.removeClass(options.radio.defaultArea + ' ' + options.radio.checked).addClass(options.radio.checked);
                        data.label.addClass('checked');
                    } else {
                        data.replaced.removeClass(options.radio.defaultArea + ' ' + options.radio.checked).addClass(options.radio.defaultArea);
                        data.label.removeClass('checked');
                    }
                });
                radio.bind('click.customForm', function() {
                    changeRadio(data);
                });
                radio.bind('focus.customForm', function() {
                    data.replaced.addClass('focus');
                }).bind('blur.customForm', function() {
                    data.replaced.removeClass('focus');
                });
                data.replaced.insertBefore(radio);
                radio.addClass('outtaHere');
                radio.data('customForm', {
                    'create': data.replaced
                });
            }
        });
    }

    function changeRadio(data) {
        jQuery('input:radio[name="' + data.name + '"]').not(data.radio).each(function() {
            var _data = $(this).data('customRadio');
            if (_data.replaced && !jQuery(this).is(':disabled')) {
                _data.replaced.removeClass(options.radio.defaultArea + ' ' + options.radio.checked).addClass(options.radio.defaultArea);
                _data.label.removeClass('checked');
            }
        });
        data.replaced.removeClass(options.radio.defaultArea + ' ' + options.radio.checked).addClass(options.radio.checked);
        data.label.addClass('checked');
        data.radio.trigger('change');
    }

    function initCheckbox(elements, form, reset) {
        elements.each(function() {
            var checkbox = $(this);
            if (!checkbox.hasClass('outtaHere') && checkbox.is(':checkbox')) {
                checkbox.data('customCheckbox', {
                    checkbox: checkbox,
                    label: $('label[for=' + checkbox.attr('id') + ']').length ? $('label[for=' + checkbox.attr('id') + ']') : checkbox.parents('label'),
                    replaced: jQuery(options.checkbox.structure, {
                        'class': checkbox.attr('class')
                    })
                });
                var data = checkbox.data('customCheckbox');
                if (checkbox.is(':disabled')) {
                    data.replaced.addClass(options.disabled);
                    if (checkbox.is(':checked')) data.replaced.addClass('disabledChecked');
                } else if (checkbox.is(':checked')) {
                    data.replaced.addClass(options.checkbox.checked);
                    data.label.addClass('checked');
                } else {
                    data.replaced.addClass(options.checkbox.defaultArea);
                    data.label.removeClass('checked');
                }
                data.replaced.click(function() {
                    if (!data.replaced.hasClass('disabled') && !data.replaced.parents('label').length) {
                        if (checkbox.is(':checked')) checkbox.prop('checked', false);
                        else checkbox.prop('checked', true);
                        changeCheckbox(data);
                    }
                });
                reset.click(function() {
                    setTimeout(function() {
                        changeCheckbox(data);
                    }, 10);
                });
                checkbox.bind('refresh', function() {
                    if (checkbox.is(':checked')) {
                        data.replaced.removeClass(options.checkbox.defaultArea + ' ' + options.checkbox.defaultArea).addClass(options.checkbox.checked);
                        data.label.addClass('checked');
                    } else {
                        data.replaced.removeClass(options.checkbox.defaultArea + ' ' + options.checkbox.checked).addClass(options.checkbox.defaultArea);
                        data.label.removeClass('checked');
                    }
                });
                checkbox.bind('click.customForm', function() {
                    changeCheckbox(data);
                });
                checkbox.bind('focus.customForm', function() {
                    data.replaced.addClass('focus');
                }).bind('blur.customForm', function() {
                    data.replaced.removeClass('focus');
                });
                data.replaced.insertBefore(checkbox);
                checkbox.addClass('outtaHere');
                data.replaced.parents('label').bind('click.customForm', function() {
                    if (!data.replaced.hasClass('disabled')) {
                        if (checkbox.is(':checked')) checkbox.prop('checked', false);
                        else checkbox.prop('checked', true);
                        changeCheckbox(data);
                    }
                    return false;
                });
                checkbox.data('customForm', {
                    'create': data.replaced,
                    'events': data.replaced.parents('label')
                });
            }
        });
    }

    function changeCheckbox(data) {
        if (data.checkbox.is(':checked')) {
            data.replaced.removeClass(options.checkbox.defaultArea + ' ' + options.checkbox.defaultArea).addClass(options.checkbox.checked);
            data.label.addClass('checked');
        } else {
            data.replaced.removeClass(options.checkbox.defaultArea + ' ' + options.checkbox.checked).addClass(options.checkbox.defaultArea);
            data.label.removeClass('checked');
        }
        data.checkbox.trigger('change');
    }
};

/**
 * jQuery gallery v2.0.4
 **/

;
(function(e) {
    var t = function(e) {
            e.holdWidth = e.list.parent().outerWidth();
            e.woh = e.elements.outerWidth(true);
            if (!e.direction) e.parentSize = e.holdWidth;
            else {
                e.woh = e.elements.outerHeight(true);
                e.parentSize = e.list.parent().height()
            }
            e.wrapHolderW = Math.ceil(e.parentSize / e.woh);
            if ((e.wrapHolderW - 1) * e.woh + e.woh / 2 > e.parentSize) e.wrapHolderW--;
            if (e.wrapHolderW == 0) e.wrapHolderW = 1
        },
        n = function(e) {
            if (!e.direction) return {
                left: -(e.woh * e.active)
            };
            else return {
                top: -(e.woh * e.active)
            }
        },
        r = function(e) {
            e.prevBtn.removeClass(e.disableBtn);
            e.nextBtn.removeClass(e.disableBtn);
            if (e.active == 0 || e.count + 1 == e.wrapHolderW - 1) e.prevBtn.addClass(e.disableBtn);
            if (e.active == 0 && e.count + 1 == 1 || e.count + 1 <= e.wrapHolderW - 1) e.nextBtn.addClass(e.disableBtn);
            if (e.active == e.rew) e.nextBtn.addClass(e.disableBtn)
        },
        i = function(e, t, n) {
            t.bind(e.event, function() {
                if (e.flag) {
                    if (e.infinite) e.flag = false;
                    if (e._t) clearTimeout(e._t);
                    o(e, n);
                    if (e.autoRotation) f(e);
                    if (typeof e.onChange == "function") e.onChange({
                        elements: e.elements,
                        active: e.active
                    })
                }
                if (e.event == "click") return false
            })
        },
        s = function(e) {
            e.switcher.bind(e.event, function() {
                e.active = e.switcher.index(jQuery(this)) * e.slideElement;
                if (e._t) clearTimeout(e._t);
                if (e.disableBtn) r(e);
                if (!e.effect) a(e);
                else u(e);
                if (e.autoRotation) f(e);
                if (typeof e.onChange == "function") e.onChange({
                    elements: e.elements,
                    active: e.active
                });
                if (e.event == "click") return false
            })
        },
        o = function(e, t) {
            if (!e.infinite) {
                if (e.active == e.rew && e.circle && t) e.active = -e.slideElement;
                if (e.active == 0 && e.circle && !t) e.active = e.rew + e.slideElement;
                for (var i = 0; i < e.slideElement; i++) {
                    if (t) {
                        if (e.active + 1 <= e.rew) e.active++
                    } else {
                        if (e.active - 1 >= 0) e.active--
                    }
                }
            } else {
                if (e.active >= e.count + e.count && t) e.active -= e.count;
                if (e.active <= e.count - 1 && !t) e.active += e.count;
                e.list.css(n(e));
                if (t) e.active += e.slideElement;
                else e.active -= e.slideElement
            }
            if (e.disableBtn) r(e);
            if (!e.effect) a(e);
            else u(e)
        },
        u = function(e) {
            if (!e.IEfx && e.IE) {
                e.list.eq(e.last).css({
                    opacity: 0
                });
                e.list.removeClass(e.activeClass).eq(e.active).addClass(e.activeClass).css({
                    opacity: "auto"
                })
            } else {
                e.list.eq(e.last).animate({
                    opacity: 0
                }, {
                    queue: false,
                    easing: e.easing,
                    duration: e.duration
                });
                e.list.removeClass(e.activeClass).eq(e.active).addClass(e.activeClass).animate({
                    opacity: 1
                }, {
                    queue: false,
                    duration: e.duration,
                    complete: function() {
                        jQuery(this).css("opacity", "auto")
                    }
                })
            }
            if (e.autoHeight) e.list.parent().animate({
                height: e.list.eq(e.active).outerHeight()
            }, {
                queue: false,
                duration: e.duration
            });
            if (e.switcher) e.switcher.removeClass(e.activeClass).eq(e.active).addClass(e.activeClass);
            e.last = e.active
        },
        a = function(e) {
            if (!e.infinite) e.list.animate(n(e), {
                queue: false,
                easing: e.easing,
                duration: e.duration
            });
            else e.list.animate(n(e), e.duration, e.easing, function() {
                e.flag = true
            });
            if (e.autoHeight) e.list.parent().animate({
                height: e.list.children().eq(e.active).outerHeight()
            }, {
                queue: false,
                duration: e.duration
            });
            if (e.switcher) e.switcher.removeClass(e.activeClass).eq(e.active / e.slideElement).addClass(e.activeClass)
        },
        f = function(e) {
            if (e._t) clearTimeout(e._t);
            e._t = setInterval(function() {
                if (e.infinite) e.flag = false;
                o(e, true);
                if (typeof e.onChange == "function") e.onChange({
                    elements: e.elements,
                    active: e.active
                })
            }, e.autoRotation)
        },
        l = function(e) {
            if (e.flexible && !e.direction) {
                t(e);
                if (e.elements.length * e.minWidth > e.holdWidth) {
                    e.elements.css({
                        width: Math.floor(e.holdWidth / Math.floor(e.holdWidth / e.minWidth))
                    });
                    if (e.elements.outerWidth(true) > Math.floor(e.holdWidth / Math.floor(e.holdWidth / e.minWidth))) {
                        e.elements.css({
                            width: Math.floor(e.holdWidth / Math.floor(e.holdWidth / e.minWidth)) - (e.elements.outerWidth(true) - Math.floor(e.holdWidth / Math.floor(e.holdWidth / e.minWidth)))
                        })
                    }
                } else {
                    e.active = 0;
                    e.elements.css({
                        width: Math.floor(e.holdWidth / e.elements.length)
                    })
                }
            }
            t(e);
            if (!e.effect) {
                e.rew = e.count - e.wrapHolderW + 1;
                if (e.active > e.rew) e.active = e.rew;
                e.list.css({
                    position: "relative"
                }).css(n(e));
                if (e.switcher) e.switcher.removeClass(e.activeClass).eq(e.active).addClass(e.activeClass);
                if (e.autoHeight) e.list.parent().css({
                    height: e.list.children().eq(e.active).outerHeight()
                })
            } else {
                e.rew = e.count;
                e.list.css({
                    opacity: 0
                }).removeClass(e.activeClass).eq(e.active).addClass(e.activeClass).css({
                    opacity: 1
                }).css("opacity", "auto");
                if (e.switcher) e.switcher.removeClass(e.activeClass).eq(e.active).addClass(e.activeClass);
                if (e.autoHeight) e.list.parent().css({
                    height: e.list.eq(e.active).outerHeight()
                })
            }
            if (e.disableBtn) r(e)
        },
        c = function(t) {
            if (!t.effect) {
                var n, i = false,
                    s = 0,
                    u, l = false,
                    c = e("<span></span>");
                c.css({
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 9999,
                    height: 9999,
                    cursor: "pointer",
                    zIndex: 9999
                });
                t.list.parent().css({
                    position: "relative"
                }).append(c);
                c.css({
                    display: "none"
                });
                t.list.bind("mousedown touchstart", function(e) {
                    l = false;
                    if (t._t) clearTimeout(t._t);
                    t.list.stop();
                    i = true;
                    n = e.originalEvent.pageX;
                    u = t.list.position().left;
                    s = 0;
                    if (e.type == "mousedown") e.preventDefault()
                });
                e(document).bind("mousemove.gallery touchmove.gallery", function(e) {
                    if (n != e.originalEvent.pageX && i) {
                        c.css({
                            display: "block"
                        });
                        s = Math.abs(e.originalEvent.pageX - n);
                        if (n <= e.originalEvent.pageX) s *= -1;
                        if (t.list.position().left > 0 && t.active == 0 || t.list.position().left < -t.woh * t.rew && t.active == t.rew) {
                            t.list.css({
                                left: u - s / 3
                            })
                        } else {
                            t.list.css({
                                left: u - s
                            })
                        }
                    }
                }).bind("mouseup.gallery touchend.gallery", function(e) {
                    if (i) {
                        c.css({
                            display: "none"
                        });
                        i = false;
                        if (s > 0 && Math.abs(s) < t.woh && Math.abs(s) > 20) {
                            l = "left"
                        }
                        if (s < 0 && Math.abs(s) < t.woh && Math.abs(s) > 20) {
                            l = "right"
                        }
                        if (t.list.position().left > 0) {
                            t.active = 0;
                            a(t)
                        }
                        if (t.list.position().left < -t.woh * t.rew) {
                            t.active = t.rew;
                            a(t)
                        }
                        if (t.list.position().left > -t.woh * t.rew && t.list.position().left < 0) {
                            if (l) {
                                if (l == "right") {
                                    o(t, false)
                                } else {
                                    o(t, true)
                                }
                                l = false
                            } else {
                                if (Math.abs(s) > 20) {
                                    if (s > 0) t.active = Math.ceil(-1 * t.list.position().left / t.woh);
                                    else t.active = -1 * Math.ceil(t.list.position().left / t.woh)
                                } else {
                                    t.active = -1 * Math.round(t.list.position().left / t.woh)
                                }
                                a(t)
                            }
                        }
                        if (t.disableBtn) r(t);
                        if (typeof t.onChange == "function") t.onChange({
                            elements: t.elements,
                            active: t.active
                        });
                        if (t.autoRotation) f(t)
                    }
                })
            }
        },
        h = {
            init: function(t) {
                return this.each(function() {
                    var r = e(this);
                    r.data("gallery", jQuery.extend({}, p, t));
                    var o = r.data("gallery");
                    o.aR = o.autoRotation;
                    o.context = r;
                    o.list = o.context.find(o.listOfSlides);
                    o.elements = o.list;
                    if (o.elements.css("position") == "absolute" && o.autoDetect) o.effect = true;
                    o.count = o.list.index(o.list.filter(":last"));
                    if (!o.IEfx) o.IE = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
                    if (!o.effect) o.list = o.list.parent();
                    else o.touch = false;
                    if (o.switcher) o.switcher = o.context.find(o.switcher);
                    if (o.switcher.length == 0) o.switcher = false;
                    if (o.nextBtn) o.nextBtn = o.context.find(o.nextBtn);
                    if (o.prevBtn) o.prevBtn = o.context.find(o.prevBtn);
                    if (o.switcher) o.active = o.switcher.index(o.switcher.filter("." + o.activeClass + ":eq(0)"));
                    else o.active = o.elements.index(o.elements.filter("." + o.activeClass + ":eq(0)"));
                    if (o.active < 0) o.active = 0;
                    o.last = o.active;
                    if (o.flexible && !o.direction) o.minWidth = o.elements.outerWidth(true);
                    l(o);
                    if (o.flexible && !o.direction) {
                        e(window).bind("resize.gallery", function() {
                            l(o)
                        })
                    }
                    o.flag = true;
                    if (o.infinite) {
                        o.count++;
                        o.active += o.count;
                        o.list.append(o.elements.clone());
                        o.list.append(o.elements.clone());
                        o.list.css(n(o))
                    }
                    if (o.nextBtn) i(o, o.nextBtn, true);
                    if (o.prevBtn) i(o, o.prevBtn, false);
                    if (o.switcher) s(o);
                    if (o.autoRotation) f(o);
                    if (o.touch) c(o)
                })
            },
            option: function(e, t) {
                if (typeof t != "object") t = this.eq(0);
                var n = this.filter(t),
                    r = n.data("gallery");
                if (!r) return this;
                return r[e]
            },
            destroy: function() {
                return this.each(function() {
                    var t = e(this),
                        n = t.data("gallery");
                    e(window).unbind(".gallery");
                    n.gallery.remove();
                    t.removeData("gallery")
                })
            },
            rePosition: function() {
                return this.each(function() {
                    var t = e(this),
                        n = t.data("gallery");
                    l(n)
                })
            },
            stop: function() {
                return this.each(function() {
                    var t = e(this),
                        n = t.data("gallery");
                    n.aR = n.autoRotation;
                    n.autoRotation = false;
                    if (n._t) clearTimeout(n._t)
                })
            },
            play: function(t) {
                return this.each(function() {
                    var n = e(this),
                        r = n.data("gallery");
                    if (r._t) clearTimeout(r._t);
                    r.autoRotation = t ? t : r.aR;
                    if (r.autoRotation) f(r)
                })
            },
            next: function(t) {
                return this.each(function() {
                    var n = e(this),
                        i = n.data("gallery");
                    if (t != "undefined" && t > -1) {
                        i.active = t;
                        if (i.disableBtn) r(i);
                        if (!i.effect) a(i);
                        else u(i)
                    } else {
                        if (i.flag) {
                            if (i.infinite) i.flag = false;
                            if (i._t) clearTimeout(i._t);
                            o(i, true);
                            if (i.autoRotation) f(i);
                            if (typeof i.onChange == "function") i.onChange({
                                elements: i.elements,
                                active: i.active
                            })
                        }
                    }
                })
            },
            prev: function() {
                return this.each(function() {
                    var t = e(this),
                        n = t.data("gallery");
                    if (n.flag) {
                        if (n.infinite) n.flag = false;
                        if (n._t) clearTimeout(n._t);
                        o(n, false);
                        if (n.autoRotation) f(n);
                        if (typeof n.onChange == "function") n.onChange({
                            elements: n.elements,
                            active: n.active
                        })
                    }
                })
            }
        },
        p = {
            infinite: false,
            activeClass: "active",
            duration: 300,
            slideElement: 1,
            autoRotation: false,
            effect: false,
            listOfSlides: "ul:eq(0) > li",
            switcher: false,
            disableBtn: false,
            nextBtn: ".next",
            prevBtn: ".prev",
            IEfx: true,
            circle: true,
            direction: false,
            event: "click",
            autoHeight: false,
            easing: "easeOutQuad",
            flexible: false,
            autoDetect: true,
            touch: true,
            onChange: null
        };
    e.fn.gallery = function(t) {
        if (h[t]) {
            return h[t].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof t === "object" || !t) {
                return h.init.apply(this, arguments)
            } else {
                e.error("Method " + t + " does not exist on jQuery.gallery")
            }
        }
    };
    jQuery.easing["jswing"] = jQuery.easing["swing"];
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, r, i) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
        },
        easeOutQuad: function(e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeOutCirc: function(e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        }
    })
})(jQuery);

/*! jQuery UI - v1.12.1 - 2016-10-28
 * http://jqueryui.com
 * Includes: widget.js, keycode.js, unique-id.js, widgets/mouse.js, widgets/slider.js, widgets/tabs.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var e = 0,
        i = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
            } catch (a) {}
            e(i)
        }
    }(t.cleanData), t.widget = function(e, i, s) {
        var n, o, a, r = {},
            l = e.split(".")[0];
        e = e.split(".")[1];
        var h = l + "-" + e;
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function(e) {
            return !!t.data(e, h)
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }

                function n(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }(), void 0) : (r[e] = s, void 0)
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }), n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
        for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
            for (s in o[a]) n = o[a][s], o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
        return e
    }, t.widget.bridge = function(e, s) {
        var n = s.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var a = "string" == typeof o,
                r = i.call(arguments, 1),
                l = this;
            return a ? this.length || "instance" !== o ? this.each(function() {
                var i, s = t.data(this, n);
                return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'")
            }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function() {
                var e = t.data(this, n);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new s(o, this))
            })), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(i, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                    if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }
            var s = [],
                n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t,
                o = {
                    extra: n ? e : i,
                    keys: n ? t : e,
                    element: n ? this.element : t,
                    add: s
                };
            return o.element.toggleClass(this._classes(o), s), this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/),
                    h = l[1] + o.eventNamespace,
                    c = l[2];
                c ? n.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    }), t.widget, t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var s = !1;
    t(document).on("mouseup", function() {
        s = !1
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!s) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    o = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return n && !o && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), s = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, s = !1, e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = "<span tabindex='0'></span>",
                a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, l, h, c = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
            }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var s, n, o = this.value(),
                a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step,
                s = Math.round((t - e) / i) * i;
            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range,
                r = this.options,
                l = this,
                h = this._animateOff ? !1 : r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
                }
                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - o)
                }
                this._slide(e, a, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.ui.escapeSelector = function() {
        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(e) {
            return e.replace(t, "\\$1")
        }
    }(), t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (n) {}
                try {
                    s = decodeURIComponent(s)
                } catch (n) {}
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                s = this.tabs.index(i),
                n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }
            for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function(t, e) {
            return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                s = this.anchors,
                n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"),
                    l = t(s).closest("li"),
                    h = l.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                o = n.closest("li"),
                a = o[0] === s[0],
                r = a && i.collapsible,
                l = r ? t() : this._getPanelForTab(o),
                h = s.length ? this._getPanelForTab(s) : t(),
                c = {
                    oldTab: s,
                    oldPanel: h,
                    newTab: r ? t() : o,
                    newPanel: l
                };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
            }
            var o = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this,
                n = this.tabs.eq(e),
                o = n.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(n),
                r = {
                    tab: n,
                    panel: a
                },
                l = function(t, e) {
                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
                setTimeout(function() {
                    a.html(t), s._trigger("load", i, r), l(n, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    l(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), t.ui.tabs
});

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
! function(a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;
        b._touchStart = function(a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function(a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function(a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function() {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function() {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);

$(document).ready(function(){

    /* menu fix*/
    // var $menu = $("#menu_bLine");

    // $(window).scroll(function(){
    //     if ( $(this).scrollTop() > 400 && $menu.hasClass("default") ){
    //         $menu.fadeOut('fast',function(){
    //             $(this).removeClass("default")
    //                 .addClass("fly")
    //                 .fadeIn('fast');
    //         });
    //     } else if($(this).scrollTop() <= 400 && $menu.hasClass("fly")) {
    //         $menu.fadeOut('fast',function(){
    //             $(this).removeClass("fly")
    //                 .addClass("default")
    //                 .fadeIn('fast');
    //         });
    //     }
    // });
    /* end menu fix*/

$('.fotorama').on('fotorama:ready', function (e, fotorama) {
$('.fotorama__stage__shaft').on('click', function(){
fotorama.requestFullScreen()
})
})




});
/* end document.ready */