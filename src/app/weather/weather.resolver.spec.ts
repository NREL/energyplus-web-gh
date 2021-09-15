import { TestBed } from '@angular/core/testing';

import { WeatherResolver } from './weather.resolver';

describe('WeatherResolver', () => {
  let resolver: WeatherResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WeatherResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
