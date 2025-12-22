import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormReactChildComponent } from "../form-react-child/form-react-child.component";

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {

  result: any[] = [];
  userForm: any;

  selectAll = false;
  showActions = false;

  isEditMode = false;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      loanType: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanPurpose: ['', Validators.required],
      employer: ['', Validators.required],
      jobTitle: ['', Validators.required],
      income: ['', Validators.required],
      signature: ['', Validators.required],
      date: ['', Validators.required],
      confirmation: [false, Validators.requiredTrue]
    })

  }



  isInvalid(controlName: any) {
    const control = this.userForm.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }



  onSubmit() {
    if (this.userForm.invalid) return;
    if (this.userForm.valid) {
      console.log(this.result);
      const uniqueKey = `BankersData_${Date.now()}`
      localStorage.setItem(uniqueKey, JSON.stringify(this.userForm.value))
    }

    if (this.isEditMode && this.editIndex !== null) {

      this.result[this.editIndex] = {
        ...this.userForm.value,
        selected: false
      };

      this.isEditMode = false;
      this.editIndex = null;

    } else {
      this.result.push({
        ...this.userForm.value,
        selected: false
      });
    }

    this.userForm.reset();
    this.showActions = false;
    this.selectAll = false;


  }



  toggleAll(event: any) {
    this.selectAll = event.target.checked;

    this.result.forEach((item: any) => {
      item.selected = this.selectAll;
    });

    // show buttons if any checked
    this.showActions = this.result.some(
      (item: any) => item.selected
    );
  }



  onRowSelect() {
    // update select all checkbox
    this.selectAll = this.result.every(
      (item: any) => item.selected
    );

    // show buttons if at least one checkbox is checked
    this.showActions = this.result.some(
      (item: any) => item.selected
    );
  }




  onDelete() {
    const confirmDelete = confirm('Are you sure you want to delete selected records?');

    if (!confirmDelete) return;

    this.result = this.result.filter(
      (item: any) => !item.selected
    );

    // Reset header checkbox & action buttons
    this.selectAll = false;
    this.showActions = false;
  }




  onEdit() {
    const selectedItems = this.result.filter(
      (item: any) => item.selected
    );

    if (selectedItems.length !== 1) {
      alert('Please select exactly one record to edit');
      return;
    }

    const selectedItem = selectedItems[0];

    this.editIndex = this.result.indexOf(selectedItem);
    // this.editForm = { ...selectedItem };
    // this.showEditForm = true;

    this.userForm.patchValue(selectedItem);

    this.isEditMode = true;
  }

}