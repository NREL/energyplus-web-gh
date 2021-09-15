import { WeatherService } from '../../weather/weather.service';
import { RegionPipe } from './region.pipe';

describe('RegionPipe', () => {
  it('create an instance', () => {
    const pipe = new RegionPipe();
    expect(pipe).toBeTruthy();
  });
});
