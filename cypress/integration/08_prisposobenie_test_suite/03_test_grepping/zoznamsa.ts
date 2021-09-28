// úloha #1: spusti si všetky testy s tagom @smoke
// úloha #2: spusti si všetky testy s tagom @user
// úloha #3: spusti si všetky testy bez tagu @user
// úloha #4: spusti si všetky testy ktoré majú tag @user alebo @login
// úloha #5: spusti si všetky testy ktoré majú tag @user ale nemajú tag @login


it('test #1: @smoke', { tags: ['@smoke']}, () => {
    
})

it('test #2: @user', { tags: ['@user']}, () => {
  
})

it('test #3: @login', { tags: ['@login', '@user']}, () => {
  
})

it('test #4: @user & @smoke', { tags: ['@smoke', '@user']}, () => {
  
})