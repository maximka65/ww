const data = [['Ярославская область', 'Захоронение', 15.0],
 ['Ярославская область', 'Хранение', 7.0],
 ['Ямало-Ненецкий автономный округ', 'Захоронение', 68.0],
 ['Ямало-Ненецкий автономный округ', 'Хранение', 8.0],
 ['Чукотский АО', 'Захоронение', 15.0],
 ['Чукотский АО', 'Хранение', 15.0],
 ['Чувашская Республика', 'Захоронение', 14.0],
 ['Чувашская Республика', 'Хранение', 13.0],
 ['Чеченская Республика', 'Захоронение', 7.0],
 ['Челябинская область', 'Захоронение', 13.0],
 ['Челябинская область', 'Хранение', 110.0],
 ['Ханты-Мансийский автономный округ - Югра', 'Хранение', 105.0],
 ['Ханты-Мансийский автономный округ - Югра', 'Захоронение', 60.0],
 ['Хабаровский край', 'Захоронение', 27.0],
 ['Хабаровский край', 'Хранение', 46.0],
 ['хабаровский край', 'Хранение', 1.0],
 ['Ульяновская область', 'Захоронение', 11.0],
 ['Ульяновская область', 'Хранение', 8.0],
 ['Тюменская область', 'Хранение', 19.0],
 ['Тюменская область', 'Захоронение', 28.0],
 ['Тульская область', 'Хранение', 22.0],
 ['Тульская область', 'Захоронение', 20.0],
 ['Томская область', 'Захоронение', 87.0],
 ['Томская область', 'Хранение', 22.0],
 ['Тверская область', 'Захоронение', 10.0],
 ['Тверская область', 'Хранение', 2.0],
 ['Тамбовская область', 'Захоронение', 10.0],
 ['Тамбовская область', 'Хранение', 10.0],
 ['Ставропольский край', 'Хранение', 13.0],
 ['Ставропольский край', 'Захоронение', 10.0],
 ['Смоленская область', 'Захоронение', 19.0],
 ['Смоленская область', 'Хранение', 5.0],
 ['Свердловская область', 'Хранение', 145.0],
 ['Свердловская область', 'Захоронение', 51.0],
 ['Сахалинская область', 'Хранение', 32.0],
 ['Сахалинская область', 'Захоронение', 16.0],
 ['Саратовская область', 'Захоронение', 20.0],
 ['Саратовская область', 'Хранение', 46.0],
 ['Санкт-Петербург', 'Хранение', 2.0],
 ['Самарская область', 'Захоронение', 33.0],
 ['Самарская область', 'Хранение', 57.0],
 ['Рязанская область', 'Хранение', 13.0],
 ['Рязанская область', 'Захоронение', 27.0],
 ['Ростовская область', 'Захоронение', 30.0],
 ['Ростовская область', 'Хранение', 15.0],
 ['Республика Хакасия', 'Хранение', 24.0],
 ['Республика Хакасия', 'Захоронение', 19.0],
 ['Республика Удмуртия', 'Хранение', 9.0],
 ['Республика Удмуртия', 'Захоронение', 9.0],
 ['Республика Тыва', 'Хранение', 5.0],
 ['Республика Тыва', 'Захоронение', 5.0],
 ['Республика Татарстан', 'Захоронение', 48.0],
 ['Республика Татарстан', 'Хранение', 20.0],
 ['Республика Северная Осетия-Алания', 'Захоронение', 1.0],
 ['Республика Северная Осетия-Алания', 'Хранение', 1.0],
 ['Республика Саха (Якутия)', 'Захоронение', 234.0],
 ['Республика Саха (Якутия)', 'Хранение', 87.0],
 ['Республика Мордовия', 'Захоронение', 9.0],
 ['Республика Мордовия', 'Хранение', 1.0],
 ['Республика Марий Эл', 'Захоронение', 18.0],
 ['Республика Марий Эл', 'Хранение', 1.0],
 ['Республика Крым', 'Захоронение', 4.0],
 ['Республика Крым', 'Хранение', 6.0],
 ['Республика Коми', 'Хранение', 71.0],
 ['Республика Коми', 'Захоронение', 40.0],
 ['Республика Карелия', 'Хранение', 27.0],
 ['Республика Карелия', 'Захоронение', 31.0],
 ['Республика Калмыкия', 'Захоронение', 1.0],
 ['Республика Ингушетия', 'Захоронение', 1.0],
 ['Республика Дагестан', 'Захоронение', 1.0],
 ['Республика \nДагестан', 'Хранение', 2.0],
 ['Республика \nДагестан', 'Захоронение', 1.0],
 ['Республика Бурятия', 'Захоронение', 22.0],
 ['Республика Бурятия', 'Хранение', 27.0],
 ['Республика Бурятия (ведоместв)', 'Захоронение', 3.0],
 ['Республика Бурятия (принимает от населения)', 'Захоронение', 2.0],
 ['Республика Башкортостан', 'Хранение', 56.0],
 ['Республика Башкортостан', 'Захоронение', 34.0],
 ['Республика башкортостан', 'Захоронение', 1.0],
 ['Республика Адыгея', 'Захоронение', 2.0],
 ['Псковская область', 'Захоронение', 12.0],
 ['Псковская область', 'Хранение', 2.0],
 ['Приморский край', 'Захоронение', 33.0],
 ['Приморский край', 'Хранение', 25.0],
 ['Пермский край', 'Захоронение', 20.0],
 ['Пермский край', 'Хранение', 74.0],
 ['Пензенская область', 'Хранение', 11.0],
 ['Пензенская область', 'Захоронение', 13.0],
 ['Оренбургская область', 'Хранение', 41.0],
 ['Оренбургская область', 'Захоронение', 15.0],
 ['Орловская область', 'Захоронение', 3.0],
 ['Орловская область', 'Хранение', 10.0],
 ['Омская область', 'Хранение', 7.0],
 ['Омская область', 'Захоронение', 4.0],
 ['Новосибирская область', 'Захоронение', 20.0],
 ['Новосибирская область', 'Хранение', 16.0],
 ['Новгородская область', 'Захоронение', 15.0],
 ['Новгородская область', 'Хранение', 1.0],
 ['Нижегородская область', 'Захоронение', 16.0],
 ['Нижегородская область', 'Хранение', 22.0],
 ['Ненецкий автономный округ', 'Захоронение', 20.0],
 ['Ненецкий автономный округ', 'Хранение', 33.0],
 ['Мурманская область', 'Захоронение', 37.0],
 ['Мурманская область', 'Хранение', 34.0],
 ['Мурманская область (в водоохранной зоне)', 'Захоронение', 1.0],
 ['Московская область', 'Захоронение', 15.0],
 ['Московская область', 'Хранение', 7.0],
 ['Магаданская область', 'Захоронение', 48.0],
 ['Магаданская область', 'Хранение', 10.0],
 ['Магаданская область****', 'Захоронение', 1.0],
 ['Липецкая область', 'Захоронение', 18.0],
 ['Липецкая область', 'Хранение', 10.0],
 ['Ленинградская область', 'Захоронение', 18.0],
 ['Ленинградская область', 'Хранение', 11.0],
 ['Карачаево-Черкесская Республика', 'Захоронение', 5.0],
 ['Карачаево-Черкесская Республика', 'Хранение', 1.0],
 ['Курская область', 'Хранение', 19.0],
 ['Курская область', 'Захоронение', 4.0],
 ['Курганская область ', 'Хранение', 8.0],
 ['Курганская область ', 'Захоронение', 5.0],
 ['Красноярский край', 'Хранение', 57.0],
 ['Красноярский край', 'Захоронение', 75.0],
 ['Краснодарский край', 'Захоронение', 15.0],
 ['Краснодарский край', 'Хранение', 44.0],
 ['Костромская область', 'Захоронение', 10.0],
 ['Костромская область', 'Хранение', 7.0],
 ['Кировская область', 'Захоронение', 23.0],
 ['Кировская область', 'Хранение', 9.0],
 ['Кемеровская область', 'Хранение', 408.0],
 ['Кемеровская область', 'Захоронение', 61.0],
 ['Кемеровская область ', 'Хранение', 1.0],
 ['Камчатский край', 'Захоронение', 35.0],
 ['Камчатский край', 'Хранение', 8.0],
 ['Калужская область', 'Захоронение', 8.0],
 ['Калужская область', 'Хранение', 1.0],
 ['Калининградская область', 'Захоронение', 4.0],
 ['Калининградская область', 'Хранение', 1.0],
 ['Кабардино-Балкарская Республика', 'Захоронение', 1.0],
 ['Кабардино-Балкарская\n Республика', 'Захоронение', 1.0],
 ['Кабардино-Балкарская\n Республика', 'Хранение', 2.0],
 ['Иркутская область', 'Захоронение', 68.0],
 ['Иркутская область', 'Хранение', 47.0],
 ['Ивановская область', 'Захоронение', 13.0],
 ['Ивановская область', 'Хранение', 5.0],
 ['Забайкальский край', 'Хранение', 68.0],
 ['Забайкальский край', 'Захоронение', 21.0],
 ['Еврейская АО', 'Хранение', 1.0],
 ['Еврейская АО', 'Захоронение', 3.0],
 ['город федерального значения Севастополь', 'Захоронение', 1.0],
 ['Воронежская область ', 'Захоронение', 24.0],
 ['Воронежская область ', 'Хранение', 6.0],
 ['Вологодская область', 'Хранение', 16.0],
 ['Вологодская область', 'Захоронение', 40.0],
 ['Владимирская область', 'Захоронение', 9.0],
 ['Волгоградская область', 'Захоронение', 16.0],
 ['Волгоградская область', 'Хранение', 12.0],
 ['Брянская область', 'Захоронение', 16.0],
 ['Белгородская область', 'Захоронение', 26.0],
 ['Белгородская область', 'Хранение', 2.0],
 ['Астраханская область', 'Захоронение', 6.0],
 ['Архангельская область', 'Хранение', 14.0],
 ['Архангельская область', 'Захоронение', 43.0],
 ['Амурская область', 'Хранение', 6.0],
 ['Амурская область', 'Захоронение', 14.0],
 ['Республика Алтай', 'Захоронение', 10.0],
 ['Республика Алтай', 'Хранение', 1.0],
 ['Алтайский край', 'Хранение', 22.0],
 ['Алтайский край', 'Захоронение', 23.0]];


const container = document.getElementById('table-container');

const names = [['Наименование субъекта',	'Назначение объектов размещения отходов ОРО',	'Количество OPO']]

function makeTable(arr) {

  const oldTable = document.getElementsByTagName("table");
  if (oldTable.length > 0) {
    oldTable[0].remove();
  }

  const table = document.createElement('table');

  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement('tr');
    
    for (let j = 0; j < arr[i].length; j++) {
      const cell = document.createElement('td');
      
      cell.innerText =  arr[i][j];
      
      row.appendChild(cell);
    }
    
    table.appendChild(row);
  }

  container.appendChild(table);

}

const paths = document.getElementsByTagName("path");

for (let i = 0; i < paths.length; i++) {
  const path = paths[i];
  path.onclick = function() {
    // Remove 'selected' class from all paths
    for (let j = 0; j < paths.length; j++) {
      paths[j].classList.remove('selected');
    }
    // Add 'selected' class to the clicked path
    path.classList.add('selected');

    arr = names.concat(data.filter(element => element[0] == path.attributes.name.value))
    console.log(path.attributes.name)
    console.log(arr);
    makeTable(arr);
  };
}

console.log([[1,2,3],[4,6,7]].concat([[7,8,9]]));