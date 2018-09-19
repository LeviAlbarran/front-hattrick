import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Calendar from 'react-native-calendar-select';

class DateModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: new Date(),  
      endDate: new Date()
    };
    this.confirmDate = this.confirmDate.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
  }

  confirmDate({startDate, endDate, startMoment, endMoment}) {
    this.setState({
      startDate,
      endDate
    });
  }

  openCalendar() {
    this.calendar && this.calendar.open();
  }

  render() {
    let customI18n = {
      'w': ['', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
      'weekday': ['', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
      'month': ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      'text': {
        'start': 'Desde',
        'end': 'Hasta',
        'date': 'Fecha',
        'save': 'Confirmar',
        'clear': 'Limpiar'
      },
      
      'date': 'DD / MM'  // date format
    };

    
    let color = {
      //subColor: '#313131',
      //mainColor: '#ffffff'
    }; 
    
    return (
      <View>
        <Calendar
          i18n="en"
          ref={(calendar) => {this.calendar = calendar;}}
          customI18n={customI18n}
          color={color}
          format="YYYYMMDD"
          //minDate="20170510"
          //maxDate="20180312"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onConfirm={this.confirmDate}
        />
  
      </View>
    );
  }
}

export default DateModal;



