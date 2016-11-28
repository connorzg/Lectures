import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  TouchableHighlight
} from 'react-native';

export default class GAR extends Component {
  constructor(props) {
    super(props)

    this.state = {
      supervision: 2,
      planning: 2,
      teamSelection: 2,
      teamFitness: 2,
      environment: 2,
      complexity: 2
    }
    this._determineColor = this._determineColor.bind(this)
  }

  _total() {
    let {supervision, planning, environment, complexity, teamFitness, teamSelection} = this.state;
    let total = supervision + planning + environment + complexity + teamFitness + teamSelection;

    return total;
  }

  _onPress() {
    this.setState({
      supervision: 2,
      planning: 2,
      teamSelection: 2,
      teamFitness: 2,
      environment: 2,
      complexity: 2
    })
  }

  _determineColor() {
    let total = this._total();

    if (total <= 23) {
      return 'green'
    } else if (total <= 44){
      return 'orange'
    } else {
      return 'red'
    }

  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={[styles.header, styles[this._determineColor()]]}>
          <Text style={styles.title}>{this._total()}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text>Supervision: {this.state.supervision}</Text>
          <Slider
            maximumValue={10}
            step={1}
            value={this.state.supervision}
            onValueChange={supervision => this.setState({ supervision })}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text>Planning: {this.state.planning}</Text>
          <Slider
            maximumValue={10}
            step={1}
            value={this.state.planning}
            onValueChange={planning => this.setState({ planning })}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text>Team Selection: {this.state.teamSelection}</Text>
          <Slider
            maximumValue={10}
            step={1}
            value={this.state.teamSelection}
            onValueChange={teamSelection => this.setState({ teamSelection })}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text>Team Fitness: {this.state.teamFitness}</Text>
          <Slider
            maximumValue={10}
            step={1}
            value={this.state.teamFitness}
            onValueChange={teamFitness => this.setState({ teamFitness })}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text>Environment: {this.state.environment}</Text>
          <Slider
            maximumValue={10}
            step={1}
            value={this.state.environment}
            onValueChange={environment => this.setState({ environment })}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text>Complexity: {this.state.complexity}</Text>
          <Slider
            maximumValue={10}
            step={1}
            value={this.state.complexity}
            onValueChange={complexity => this.setState({ complexity })}
          />
        </View>
        <TouchableHighlight onPress={() => this._onPress()} style={styles.resetButton}>
          <Text style={styles.resetText}>Reset All Fields to 2</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header:{
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 100,
    paddingBottom: 5,
    color: 'white'
  },
  green: {
    backgroundColor: 'green'
  },
  orange: {
    backgroundColor: 'orange'
  },
  red: {
    backgroundColor: 'red'
  },
  sliderContainer:{
    flex: 2,
    margin: 20,
    justifyContent: 'center'
  },
  resetButton: {
    backgroundColor: '#1452E3',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resetText: {
    color: 'white',
    fontSize: 15
  }
})
