import { Component } from '@angular/core';
import { BeerService } from '../beer.service';
import { Beer } from '../../models/Beer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent {
  BeerList: Beer[] = [];
  Beer: Beer | null = null;

  constructor(private BeerService: BeerService) {}

  ngOnInit(): void {
    this.BeerService.getAll().subscribe((beers) => (this.BeerList = beers));
  }

  delete(id: number): void {
    this.BeerService.deleteOne(id).subscribe(
      (beers) => (this.BeerList = beers)
    );
  }

  onSubmit(beer: NgForm): void {
    const newBeer: Beer = { ...beer.value };

    this.BeerService.create(newBeer).subscribe(
      (beers) => (this.BeerList = beers)
    );
  }
}
