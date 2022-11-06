import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any= 'textEditor'

   // JavaScript
    // Obtain the object reference for the <textarea>
    //var textarea :any= document.getElementById("mytextarea");

    // Obtain the index of the first selected character
    //var start = txtarea.selectionStart;

    // Obtain the index of the last selected character
    //var finish = txtarea.selectionEnd;

    // Obtain the selected text
    //var sel = txtarea.value.substring(start, finish);
    //console.log(txtarea.value.indexOf(sel))
  font:any;
  fontSize:any
  nums:any=[]
  constructor(){
    for(let i=8;i<31;i++){
      this.nums.push(i)
    }
  }
  changeText(type:any) {
 
  var sel:any = window.getSelection(); // Gets selection
  if (sel.rangeCount) {
    // Creates a new element, and insert the selected text with the chosen font inside
    var e:any = document.createElement('span');
   if(type=='font') {
     this.font=(<HTMLInputElement> document.getElementById("select_font")).value;
    e.style = 'font-family:' + this.font + ';'; }
   else if(type=="fontSize"){
     this.fontSize=(<HTMLInputElement> document.getElementById("font_size")).value;
  
    e.style='font-size:'+ this.fontSize +'px';}
   console.log(this.fontSize)
   console.log(e.style)
    e.innerHTML = sel.toString();

    // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
    var range = sel.getRangeAt(0);
    range.deleteContents(); // Deletes selected text…
    range.insertNode(e); // … and inserts the new element at its place
  }
}

}


