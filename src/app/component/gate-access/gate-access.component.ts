import { Component } from "@angular/core"
import { AngularFireDatabase } from "@angular/fire/compat/database"

@Component({
  selector: "app-gate-access",
  templateUrl: "./gate-access.component.html",
  styleUrls: ["./gate-access.component.css"],
})
export class GateAccessComponent {
  userId: string = ""
  locationId: string = ""
  gateId: string = ""
  allowedNumber: string = ""

  constructor(private db: AngularFireDatabase) {}

  saveToFirebase() {
    // Assuming you have a 'gateAccess' node in your Firebase Realtime Database
    const gateAccessRef = this.db.database.ref("/gateAccess").push()

    gateAccessRef.set({
      userId: this.userId,
      locationId: this.locationId,
      gateId: this.gateId,
      allowedNumber: this.allowedNumber,
    })

    // Reset the form after saving
    this.resetForm()
  }

  resetForm() {
    this.userId = ""
    this.locationId = ""
    this.gateId = ""
    this.allowedNumber = ""
  }
}
