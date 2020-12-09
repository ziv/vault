import { Test, TestingModule } from '@nestjs/testing';
import { VaultController } from './vault.controller';
import { VaultService } from './vault.service';

describe('VaultController', () => {
  let ctrl: VaultController;
  let service: VaultService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VaultController],
      providers: [VaultService]
    }).compile();

    ctrl = app.get<VaultController>(VaultController);
    service = app.get<VaultService>(VaultService);
  });

  it('should be defined', () => expect(ctrl).toBeDefined());

  it('should call fetch with namespace', () => {
    const res = { a: 'a' };
    const mock = jest.spyOn(service, 'fetch').mockImplementation(() => res);
    expect(ctrl.fetch('test')).toEqual(res);
    expect(mock).toHaveBeenCalledWith('test');
  });

  it('should call flush with namespace', () => {
    const res = true;
    const mock = jest.spyOn(service, 'flush').mockImplementation(() => res);
    expect(ctrl.flush('test')).toEqual(res);
    expect(mock).toHaveBeenCalledWith('test');
  });

  it('should call store with namespace', () => {
    const res = true;
    const mock = jest.spyOn(service, 'store').mockImplementation(() => res);
    expect(ctrl.store('test', {})).toEqual(res);
    expect(mock).toHaveBeenCalledWith('test', {});
  });
});
