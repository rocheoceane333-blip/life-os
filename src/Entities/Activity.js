export class Activity {
  constructor({ id, type, duration, intensity, caloriesBurned, timestamp = new Date() }) {
    this.id = id;
    this.type = type; // ex: 'Running', 'Coding'
    this.duration = duration; // en minutes
    this.intensity = intensity; // 1-10
    this.caloriesBurned = caloriesBurned;
    this.timestamp = timestamp;
  }
}