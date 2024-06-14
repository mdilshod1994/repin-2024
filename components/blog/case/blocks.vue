<script setup lang="ts"></script>

<template>
  <div cls="wrap" class="wrap-blog">
    <div cls="block" class="block">
      <div cls="block__title">Figma: <span>Collaborative Design</span></div>
      <div cls="block__text">
        Although this has already been said, too, we cannot <a href="">emphasize</a> too much how
        great a tool Figma is as it combines many tools in one. <br />
        <br />
        Rather than switching from tool to tool, feeling stressed by too many tabs and programs
        filling any desktop space, Figma allows to have it all in one which simplifies and relaxes
        all of the design process. And the best part is that we can share anything we like at all
        time with any person included. Figma allows people to work on the very same project / file
        at the very same time, bringing feedback, transparency and collaboration to a whole new
        level. It is not unusual that we are two designers, one copywriter and one researcher all
        tinkering within the same project, <a href="">focusing</a> on our own tasks whilst also
        catching up with everyone else's progress, thoughts and ideas. <br />
        <br />
        Besides, we can also have stakeholders, clients, project managers etc. pp take a look and
        give their two cents to the whole story, too — if that is what's needed at a certain point.
      </div>
      <div cls="block__img-video -mob-full-screen">
        <div cls="block__img-video-wrap ">
          <img src="https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp" alt="" />
        </div>
      </div>
      <div cls="block__text">
        Although this has already been said, too, we cannot emphasize too much how great a tool
        Figma is as it combines many tools in one. <br />
        Rather than switching from tool to tool, feeling stressed by too many tabs and programs
        filling any desktop space, Figma allows to have it all in one which simplifies and relaxes
        all of the design process. And the best part is that we can share anything we like at all
        time with any person included. Figma allows people to work on the very same project / file
        at the very same time, bringing feedback, transparency and collaboration to a whole new
        level. It is not unusual that we are two designers, one copywriter and one researcher all
        tinkering within the same project, focusing on our own tasks whilst also catching up with
        everyone else's progress, thoughts and ideas.
      </div>
      <div cls="block__list">
        <div cls="block__list-title">How we improved it:</div>
        <div cls="block__list-block">
          <div v-for="(t, idx) in 5" cls="block__list-item">
            <div cls="block__list-item-num">
              {{ idx + 1 }}
            </div>
            <span>
              Although this has already been said, too, we cannot emphasize too much how great a
              tool Figma is as it combines many tools in one.
            </span>
          </div>
        </div>
      </div>
      <div cls="block__text">
        Besides, we can also have stakeholders, clients, project managers etc. pp take a look and
        give their two cents to the whole story, too — if that is what's needed at a certain point.
      </div>
    </div>
    <div cls="block" class="block">
      <div cls="block__title"><span>Setting up files</span> with Figma</div>
      <div cls="block__text">
        Although this has already been said, too, we cannot emphasize too much how great a tool
        Figma is as it combines many tools in one.
        <br />
        <br />
        Rather than switching from tool to tool, feeling stressed by too many tabs and programs
        filling any desktop space, Figma allows to have it all in one which simplifies and relaxes
        all of the design process. And the best part is that we can share anything we like at all
        time with any person included. Figma allows people to work on the very same project / file
        at the very same time, bringing feedback, transparency and collaboration to a whole new
        level. It is not unusual that we are two designers, one copywriter and one researcher all
        tinkering within the same project, focusing on our own tasks whilst also catching up with
        everyone else's progress, thoughts and ideas.
        <br />
        <br />
        Besides, we can also have stakeholders, clients, project managers etc. pp take a look and
        give their two cents to the whole story, too — if that is what's needed at a certain point.
      </div>
      <div cls="block__list">
        <div cls="block__list-block">
          <div v-for="t in 4" cls="block__list-item -mt">
            <div cls="block__list-item-dot" />
            <span>
              Although this has already been said, too, we cannot emphasize too much how great a
              tool Figma is as it combines many tools in one.
            </span>
          </div>
        </div>
      </div>
      <div cls="block__text">
        Apart from making neat and clean designs, we also use Figma for any internal project
        documentation or to build LoFi prototypes to show and give an idea of our designs (more on
        that in just a minute).
        <br />
        Sometimes, a project needs researchers, developers, engineers or project managers to take
        part in the process. With Figma, we can decide which parts or versions of a design to share
        in order to keep it easy and manageable, and also have other people comment without being
        able to accidentally deleting or changing a design.
      </div>
      <div cls="block__img-video">
        <div cls="block__img-video-wrap">
          <img
            src="https://robbreport.com/wp-content/uploads/2022/11/11-w-Utopia_1.jpg?w=1000"
            alt=""
          />
        </div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s</span>
      </div>
    </div>
    <div cls="block" class="block">
      <div cls="block__title">
        <span>Variants & Interactive</span> <br />
        Components with Figma
      </div>
      <div cls="block__text">
        A couple of months ago, we signed up for testing and using a rather new feature called
        "interactive components." And yes, we really think that this feature opens up another world
        to us. With "interactive components" we can design and work with prototypes in an even more
        interactive way and simultaneously reduce time, effort and stress whilst working.
      </div>
      <div cls="block__info">
        <div cls="block__info-wrap">
          <div cls="block__info-img">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/22c0387-028-1670825222.jpg?crop=0.651xw:0.813xh;0.172xw,0.187xh&resize=640:*"
              alt=""
            />
          </div>
          <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, s </span>
        </div>
        <div cls="block__text">
          A couple of months ago, we signed up for testing and using a rather new feature called
          "interactive components." And yes, we really think that this feature opens up another
          world to us. With "interactive components" we can design and work with prototypes in an
          even more interactive way and simultaneously reduce time, effort and stress whilst
          working.
          <br />
          <br />
          Apart from making neat and clean designs, we also use Figma for any internal project
          documentation or to build LoFi prototypes to show and give an idea of our designs (more on
          that in just a minute).
        </div>
      </div>
      <div cls="block__text">
        A couple of months ago, we signed up for testing and using a rather new feature called
        "interactive components." And yes, we really think that this feature opens up another world
        to us. With "interactive components" we can design and work with prototypes in an even more
        interactive way and simultaneously reduce time, effort and stress whilst working.
      </div>
      <div cls="block__code">
        <div class="block__text">Here will be some of code</div>
      </div>
      <div cls="block__video">
        <r-video :vimeo="{ short: 'https://vimeo.com/955895016' }" remove-padding />
      </div>
      <div cls="block__text">
        Every designer will show their projects and the designs, talk about processes and changes
        whilst comments or proposed modifications by the rest of the team can be directly noted in
        Figma throughout the comment function. This way, we can talk and discuss and document
        without needing to stop the talking and flow. These comments will then be worked through,
        serving as gentle guidance.
        <br />
        <br />
        In the end, our designs live by the feedback we give. At Studio Lenzing, constructive
        critiques are part of our DNA and creatively and warmly shape the work we do.
      </div>
      <div cls="block__flex">
        <div cls="block__code -small" />
        <div cls="block__img-video -small">
          <div cls="block__img-video-wrap">
            <img
              src="https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/TDIEU_MY22_LEAF_full_pes_vlp-plus/OVERVIEW/DESIGN/LHD/18TDIEULHD_LEAF_B12P028_V1_pace108-m.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div cls="block__quote">
        <img src="@/assets/images/tempImages/quote.png" alt="" />
        <div cls="block__quote-text">
          "Good organization of work, excellent communication at every stage, from initiation and
          data collection, through execution and editing, and ending with the delivery of the
          finished result. Deep immersion in the tasks and goals of the project, in conjunction with
          personal experience, resulted in an excellent result. Very satisfied, 100% recommend."
        </div>
      </div>
      <div cls="block__contributors">
        <div cls="block__share">
          <blog-case-share />
        </div>
        <div cls="block__contributors-title -desk">Contributors</div>
        <div cls="block__contributors-title -mob">The article was made by</div>
        <div cls="block__contributors-authors">
          <r-author name="Ivan Repin" profession="Art Direction" />
          <r-author name="Ivan Repin" profession="Art Direction" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 104px;
  width: 100%;
  max-width: 1001px;
}
.block {
  display: flex;
  flex-direction: column;
  gap: 48px;
  &__share {
    display: none;
  }
  &__title {
    @include desctop-H2;
    span {
      @include desctop-H2-ram;
      font-style: italic;
    }
  }
  &__text {
    @include article-17;
    a {
      color: var(--Purple);
    }
  }
  &__img-video {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 8px;
    &.-small {
      .block {
        &__img-video {
          &-wrap {
            height: 596px;
            img {
              height: 100%;
            }
          }
        }
      }
    }
    &-wrap {
      border-radius: 32px;
      overflow: hidden;
      width: 100%;
      img {
        width: 100%;
      }
    }
    span {
      text-align: center;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    &-title {
      @include desctop-H4-ram;
    }
    &-block {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    &-item {
      display: flex;
      gap: 28px;
      &-num {
        width: 32px;
        height: 32px;
        color: var(--Purple);
        font-family: "Ramillas Trial";
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: -0.72px;
        display: flex;
        align-items: center;
      }
      &-dot {
        width: 32px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &::after {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          background: var(--Purple);
        }
      }
      &.-mt {
        span {
          margin-top: 0;
        }
      }
      span {
        margin-top: 4px;
        @include article-17;
      }
    }
  }
  &__info {
    display: flex;
    gap: 24px;
    &-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      max-width: 496px;
      width: 100%;
      flex-shrink: 0;
      span {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
      }
    }
    &-img {
      height: 411px;
      border-radius: 32px;
      overflow: hidden;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  &__code {
    height: 684px;
    border-radius: 32px;
    overflow: hidden;
    width: 100%;
    background: var(--Purple);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    &.-small {
      height: 596px;
    }
  }
  &__flex {
    display: flex;
    gap: 24px;
  }
  &__quote {
    padding: 96px 0;
    position: relative;
    margin-top: 48px;
    img {
      position: absolute;
      top: 0;
      left: -90px;
      width: 242px;
      height: 187px;
    }
    &-text {
      position: relative;
      @include desctop-H4-ram;
    }
  }
  &__contributors {
    padding: 32px 0 0;
    display: flex;
    justify-content: space-between;
    height: 243px;
    &-authors {
      display: flex;
      align-items: flex-start;
      gap: 24px;
    }
    &-title {
      &.-mob {
        display: none;
      }
    }
  }
}

@include tablet {
  .wrap {
    gap: 72px;
  }
  .block {
    gap: 32px;
    &__title {
      @include mob-H1;
      span {
        @include mob-H1-ram;
        font-style: italic;
      }
    }
    &__text {
      @include mob-body-14;
    }
    &__list {
      gap: 24px;
      &-title {
        @include mob-h4-22-ram;
      }
      &-block {
        gap: 16px;
      }
      &-item {
        gap: 12px;
        &-num {
          width: 24px;
          height: 24px;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.32px;
        }
        &-dot {
          width: 24px;
          height: 20px;
          &::after {
            width: 6px;
            height: 6px;
          }
        }
        span {
          margin-top: 2px;
          @include mob-body-14;
        }
      }
    }
    &__info {
      &-wrap {
        width: 411px;
      }
      &-img {
        border-radius: 16px;
      }
    }
    &__code {
      height: 494px;
      border-radius: 16px;

      &.-small {
        height: 514px;
      }
    }
    &__img-video {
      &-wrap {
        border-radius: 16px;
      }
      &.-small {
        .block {
          &__img-video {
            &-wrap {
              height: 514px;
            }
          }
        }
      }
    }
    &__quote {
      margin-top: 40px;
      &-text {
        @include mob-H3-ram;
      }
      img {
        width: 183px;
        height: 141px;
        left: -50px;
        top: 25px;
      }
    }
    &__contributors {
      height: auto;
      margin-top: -32px;
      padding-bottom: 44px;
    }
  }
}
@include tablet-small {
  .block {
    &__info {
      &-wrap {
        width: 301px;
      }
      &-img {
        border-radius: 16px;
      }
    }
  }
}
@include mobile {
  .wrap {
    gap: 32px;
  }
  .block {
    gap: 24px;
    &__title {
      @include mob-H2;
      span {
        @include mob-H2-ram;
        font-style: italic;
      }
    }
    &__list {
      &-item {
        &-num {
          width: 24px;
          height: 22px;
        }
      }
    }
    &__img-video {
      &.-mob-full-screen {
        margin: 0 -16px;
        height: auto;
        width: calc(100% + 32px);
        .block {
          &__img-video {
            &-wrap {
              border-radius: 0;
            }
          }
        }
      }
      &.-small {
        .block {
          &__img-video {
            &-wrap {
              height: 480px;
            }
          }
        }
      }
      &-wrap {
        width: 100%;
        img {
          width: 100%;
        }
      }
      span {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__info {
      flex-direction: column;
      &-wrap {
        width: 100%;
        max-width: none;
        span {
          font-size: 12px;
          line-height: 16px;
        }
      }
      &-img {
        height: 343px;
      }
    }
    &__flex {
      flex-direction: column;
      gap: 16px;
    }
    &__code {
      &.-small {
        height: 494px;
      }
    }
    &__quote {
      padding: 24px 0;
      margin-top: 0;
      &-text {
        @include mob-h4-22-ram;
      }
      img {
        width: 170px;
        height: 131px;
        bottom: -17px;
        left: auto;
        top: auto;
        right: 0;
      }
    }
    &__contributors {
      flex-direction: column;
      padding: 24px 0 56px;
      gap: 48px;
      &-title {
        &.-desk {
          display: none;
        }
        &.-mob {
          display: block;
        }
      }
      &-authors {
        gap: 12px;
      }
    }
    &__share {
      display: flex;
      justify-content: center;
      padding-top: 24px;
    }
  }
}
</style>
