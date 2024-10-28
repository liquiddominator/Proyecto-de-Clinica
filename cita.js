document.getElementById('especialidad').addEventListener('change', function() {
    const doctorSelect = document.getElementById('doctor');
    doctorSelect.innerHTML = '<option value="">Seleccione un doctor/a</option>';
    
    const especialidad = this.value;
    let doctores = [];

    switch(especialidad) {
        case 'ginecologia':
            doctores = ['Dra. Teresa Escalante'];
            break;
        case 'nutricion':
            doctores = ['Lic. Ana Martínez'];
            break;
        case 'psicologia':
            doctores = ['Lic. Raitza Arroyo'];
            break;
        case 'medicina-general':
            doctores = ['Dr. Carlos Rodríguez'];
            break;
    }

    doctores.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor;
        option.textContent = doctor;
        doctorSelect.appendChild(option);
    });
});