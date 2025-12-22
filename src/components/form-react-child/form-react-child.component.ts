import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { flush } from '@angular/core/testing';


@Component({
  selector: 'app-form-react-child',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-react-child.component.html',
  styleUrl: './form-react-child.component.css'
})
export class FormReactChildComponent {

  @Input() sendReactData:any="";


  selectAll = false;
  showActions = false;

  editIndex: number | null = null;
  showEditForm = false;

 editForm = {
  name: '',
  dob: '',
  mobile: '',
  email: '',
  address: '',
  loanType: '',
  loanAmount: '',
  loanPurpose: '',
  employer: '',
  jobTitle: '',
  income: '',
  signature: '',
  date: '',
  confirmation: ''
};


toggleAll(event: any) {
  this.selectAll = event.target.checked;

  this.sendReactData.forEach((item: any) => {
    item.selected = this.selectAll;
  });

  // show buttons if any checked
  this.showActions = this.sendReactData.some(
    (item: any) => item.selected
  );
}


onRowSelect() {
  // update select all checkbox
  this.selectAll = this.sendReactData.every(
    (item: any) => item.selected
  );

  // show buttons if at least one checkbox is checked
  this.showActions = this.sendReactData.some(
    (item: any) => item.selected
  );
}


// Delete selected rows

onDelete() {
  const confirmDelete = confirm('Are you sure you want to delete selected records?');

  if (!confirmDelete) return;

  this.sendReactData = this.sendReactData.filter(
    (item: any) => !item.selected
  );

  // Reset header checkbox & action buttons
  this.selectAll = false;
  this.showActions = false;
}

onEdit() {
  const selectedItems = this.sendReactData.filter(
    (item: any) => item.selected
  );

  if (selectedItems.length === 0) {
    alert('Please select one record to edit');
    return;
  }

  if (selectedItems.length > 1) {
    alert('Please select only one record');
    return;
  }

  const selectedItem = selectedItems[0];

  this.editIndex = this.sendReactData.indexOf(selectedItem);
  this.editForm = { ...selectedItem };
  this.showEditForm = true;
}


onUpdate(){
  if(this.editIndex === null) return;

  this.sendReactData[this.editIndex]={
    ...this.editForm,
    selected:false
  };

  this.editIndex = null;
  this.showEditForm=false;
  this.showActions=false;
  this.selectAll=false;
}

onCancelEdit(){
  this.showEditForm=false;
  this.editIndex=null;
}

}
