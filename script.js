//Panggil Tag HTML
const inputNama = document.querySelector(`.inputNama`);
const inputJurusan = document.querySelector('.inputJurusan');
const inputEkskul = document.querySelector('.inputEkskul');
const tabelData = document.querySelector('.DataPendaftaran');
const formPendaftaran = document.querySelector(`.formPendaftaran`)

const DaftarSiswa = []

//function biar muncul datanya
function TampilData() {
    tabelData.innerHTML = ``

    //bentuk struktur tabel yang bakal muncul
    DaftarSiswa.forEach((siswa, index) => {
        tabelData.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${siswa.nama}</td>
                <td>${siswa.kelas}</td>
                <td>${siswa.jurusan}</td>
                <td>${siswa.ekskul}</td>
                <td>
                    <button type="button" class="TombolEdt" onclick="EditData(${index})">Edit</button>
                    <button type="button" class="TombolHps" onclick="HapusData(${index})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

//input data ke array DaftarSiswa
formPendaftaran.addEventListener('submit', (event) => {
    event.preventDefault();

    const kelasDipilih = document.querySelector('input[name="kelas"]:checked');
    if (inputNama.value === '' || !kelasDipilih) {
        alert('Nama dan kelas wajib diisi.');
        return;
    }

    DaftarSiswa.push({
        nama: inputNama.value,
        kelas: kelasDipilih.value,
        jurusan: inputJurusan.value,
        ekskul: inputEkskul.value
    });

    TampilData();
    formPendaftaran.reset();
});


//tombol hapus data
function HapusData(index) {
    DaftarSiswa.splice(index, 1);
    TampilData();

    alert('Data berhasil dihapus');
}

//tombol edit data
function EditData(index) {
    const siswa = DaftarSiswa[index];
    
    const inputKelas = document.querySelector(`input[name="kelas"][value="${siswa.kelas}"]`);
    inputKelas.checked = true;
    inputNama.value = siswa.nama;
    inputJurusan.value = siswa.jurusan;
    inputEkskul.value = siswa.ekskul;
    TampilData();
}
