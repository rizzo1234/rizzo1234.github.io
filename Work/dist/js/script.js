$(document).ready(function(){$(".feedback-slider").slick({}),modalOpen()});var modalOpen=function(){var e=document.querySelectorAll(".header-btn, .open-btn");$(e).click(function(){$(".header-btn").removeClass("header-btn__active"),$(".header-btn").toggleClass("header-btn__active"),$(".modalDialog ").animate({right:"0px"},200),$("body").animate({right:"530px"},700)}),$("#open-modal").click(function(){$("#open-modal").toggleClass("header-btn__active")}),$(".closeModal").click(function(){$(".header-btn").removeClass("header-btn__active"),$(".modalDialog").animate({right:"-530px"},200),$("body").animate({right:"0px"},200)})};