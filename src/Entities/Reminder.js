export class Reminder {
  constructor({ id, title, description, triggerAt, priority = 'medium', isCompleted = false }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.triggerAt = triggerAt;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }
}