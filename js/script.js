'use strict'

const checkNational = document.getElementById('national');
const nationalDetail = document.querySelector('.checked_national');

const checkInternational = document.getElementById('international');
const interNationalDetail = document.querySelector('.checked_international');

const checkLocal = document.getElementById('local');
const locallDetail = document.querySelector('.checked_local');

const academics_national = document.getElementById('academics_national');
const file_academics_national = document.querySelector('.file_academics_national');

const spCu_national = document.getElementById('spCu_national');
const file_spCu_national = document.querySelector('.file_spCu_national');

const academics_international = document.getElementById('academics_international');
const file_academics_international = document.querySelector('.file_academics_international');

const spCu_international = document.getElementById('spCu_international');
const file_spCu_international = document.querySelector('.file_spCu_international');

const academics_local = document.getElementById('academics_local');
const file_academics_local = document.querySelector('.file_academics_local');

const spCu_local = document.getElementById('spCu_local');
const file_spCu_local = document.querySelector('.file_spCu_local');

function Check1() {
    if (checkNational.checked) {
        nationalDetail.style.display = 'block';
    }
    else {
        nationalDetail.style.display = 'none';
    }
}

function Check2() {
    if (checkInternational.checked) {
        interNationalDetail.style.display = 'block';
    }
    else {
        interNationalDetail.style.display = 'none';
    }
}

function Check3() {
    if (checkLocal.checked) {
        locallDetail.style.display = 'block';
    }
    else {
        locallDetail.style.display = 'none';
    }
}

function check4() {
    if (academics_national.checked) {
        file_academics_national.style.display = 'block';
    }
    else {
        file_academics_national.style.display = 'none';
    }
}

function check5() {
    if (spCu_national.checked) {
        file_spCu_national.style.display = 'block';
    }
    else {
        file_spCu_national.style.display = 'none';
    }
}

function check6() {
    if (academics_international.checked) {
        file_academics_international.style.display = 'block';
    }
    else {
        file_academics_international.style.display = 'none';
    }
}

function check7() {
    if (spCu_international.checked) {
        file_spCu_international.style.display = 'block';
    }
    else {
        file_spCu_international.style.display = 'none';
    }
}

function check8() {
    if (academics_local.checked) {
        file_academics_local.style.display = 'block';
    }
    else {
        file_academics_local.style.display = 'none';
    }
}

function check9() {
    if (spCu_local.checked) {
        file_spCu_local.style.display = 'block';
    }
    else {
        file_spCu_local.style.display = 'none';
    }
}