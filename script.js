
const objects = {
	hewan: [
		"anjing", "kucing", "burung", "ular", "ikan"
	],
	buah: [
		"apel", "jeruk", "anggur", "semangka", "nanas", "pepaya", "pisang"
	],
	warna: [
		"hitam", "putih", "merah", "biru", "kuning", "hijau"
	]
}


let inputData = [];

function inputHewan() {

	const hewan = objects.hewan;
	const inputHewan = hewan[Math.floor(Math.random() * hewan.length)];
	inputData.push(inputHewan);

	document.getElementById("input").innerHTML = JSON.stringify(inputData,null,2);
}

function inputBuah() {
	const buah = objects.buah;
	const inputBuah = buah[Math.floor(Math.random() * buah.length)];
	inputData.push(inputBuah);

	document.getElementById("input").innerHTML = JSON.stringify(inputData,null,2);
}

function inputWarna() {
	const warna = objects.warna;
	const inputWarna = warna[Math.floor(Math.random() * warna.length)];
	inputData.push(inputWarna);

	document.getElementById("input").innerHTML = JSON.stringify(inputData,null,2);
}

function inputHewanBatch() {
	inputData=objects.hewan;
	document.getElementById("input").innerHTML = JSON.stringify(inputData,null,2);
}

function clearInput(){
	inputData = [];
	document.getElementById("input").innerHTML = JSON.stringify(inputData,null,2);
}


function processCase1() {
	if(inputData.length===3) {
		let validHewan = isDataMatched(objects.hewan, inputData[0]);
		let validBuah = isDataMatched(objects.buah, inputData[1]);
		let validWarna = isDataMatched(objects.warna, inputData[2]);


		if(validHewan===true && validBuah===true && validWarna===true) {
			document.getElementById("output").innerHTML = JSON.stringify(inputData,null,2);
		} else {
			alert("Data input tidak valid!");
		}

	} else {
		alert("Data input tidak valid!");
	}

}

function processCase2() {

	if(inputData.length===4) {
		let validHewan1 = isDataMatched(objects.hewan, inputData[0]);
		let validBuah = isDataMatched(objects.buah, inputData[1]);
		let validWarna = isDataMatched(objects.warna, inputData[2]);
		let validHewan2 = isDataMatched(objects.hewan, inputData[3]);

		if(validHewan1===true && validBuah===true && validWarna===true && validHewan2===true) {
			if(inputData[0]===inputData[3]) {
				alert("Input hewan pertama dan terakhir tidak boleh sama!");
			} else {
				document.getElementById("output").innerHTML = JSON.stringify(inputData,null,2);
			}
		} else {
			alert("Data input tidak valid!");
		}

	} else {
		alert("Data input tidak valid!");
	}
	
}

function processCase3() {
	if(inputData.length===5) {
		let validData1 = isDataMatched(objects.hewan, inputData[0]);
		let validData2 = isDataMatched(objects.hewan, inputData[1]);
		let validData3 = isDataMatched(objects.hewan, inputData[2]);
		let validData4 = isDataMatched(objects.hewan, inputData[3]);
		let validData5 = isDataMatched(objects.hewan, inputData[4]);

		if(validData1===true && validData2===true && validData3===true && validData4===true && validData5===true) {

			let duplicatedData = inputData.filter((item, index) => inputData.indexOf(item) != index);
			if(duplicatedData.length > 0) {
				alert("Data hewan tidak boleh ada yang sama!");
			} else {
				document.getElementById("output").innerHTML = JSON.stringify(inputData,null,2);
			}
		} else {
			alert("Data input tidak valid!");
		}

	} else {
		alert("Jumlah data tidak boleh lebih dari 5!");
	}
}

function isDataMatched(array, match) {
	let isDataMatched = false;
	array.forEach((item) => {
		if(item===match) {
			isDataMatched = true;
		}
	});
	return isDataMatched;
}