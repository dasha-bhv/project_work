const Spaces = require('../src/clients/methods');


describe('Tests for spaces', () => {
  test('Add new space', async () => {
    const space = await Spaces.addSpace({ title: 'my_space' });
    expect(space.status)
      .toEqual(200);
  });
  test('Add empty title', async () => {
    const emptyspace = await Spaces.addSpace({ title:'' });
    expect(emptyspace.status)
      .toEqual(400);
  });
  test('Get added space', async () => {
    const space = await Spaces.addSpace({ title: 'Get_this_space' });
    const spaceId = space.data.id;
    const showspace = await Spaces.getSpace(spaceId);
    expect(showspace.data.id).toEqual(spaceId);
    expect(showspace.data.title).toEqual('Get_this_space');
    expect(showspace.data.entity_type).toEqual('space');
    expect(showspace.data.archived).toEqual(false);
  });
  test('Get all spaces', async () => {
    const space = await Spaces.getSpaces();
    let countspace = 0;
    const spacesall = space.data;
    for (const key in spacesall) {
      countspace = countspace + 1;
    }
    expect(countspace).toBeGreaterThan(0);
  });
  test('Update space', async () => {
    const space = await Spaces.addSpace({ title: 'updated_space' });
    const spaceupId = space.data.id;
    const updSpace = await Spaces.update(spaceupId, { external_id: 899 });
    const showspace = await Spaces.getSpace(spaceupId);
    expect(showspace.data.external_id).toEqual("899");
  });
});
