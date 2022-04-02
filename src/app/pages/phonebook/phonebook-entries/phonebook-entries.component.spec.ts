import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookEntriesComponent } from './phonebook-entries.component';

describe('PhonebookEntriesComponent', () => {
  let component: PhonebookEntriesComponent;
  let fixture: ComponentFixture<PhonebookEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
